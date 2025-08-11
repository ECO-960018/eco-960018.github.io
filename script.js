	const IMAGE_WIDTH = 3200;
	const IMAGE_HEIGHT = 12100;
	const svg = d3.select("#timeline")

	const g = svg.append("g");
	const tooltip = d3.select("#tooltip");
	const sidebar = d3.select("#sidebar");
	
	let activeTags = new Set();
	let currentZoomLevel = 1;
	  
	let currentLang = 'pt';
	
	document.getElementById("language-select").addEventListener("change", (e) => {
		currentLang = e.target.value
		renderEvents(activeTags)
		updateLanguageTexts()
	});

	function translate(field) {
		if (typeof field === "string") return field;
		return field[currentLang] || field['pt'] || "";
	}
	
	const translations = {
	  en: {
		all: "GENERAL",
		stoneAge: "Stone Age",
		bronzeAge: "Bronze Age",
		ironAge: "Iron Age",
		ancientAge: "Antiquity",
		middleAges: "Middle Ages",
		modern: "Modern Age"
	  },
	  pt: {
		all: "GERAL",
		stoneAge: "Idade da Pedra",
		bronzeAge: "Idade do Bronze",
		ironAge: "Idade do Ferro",
		ancientAge: "Idade Antiga",
		middleAges: "Idade Média",
		modern: "Idade Moderna"
	  }
	};

	function t(key) {
	  return translations[currentLang]?.[key] || key;
	}
	
	function formatYear(y) {
		const suffix = y > 0
			? (currentLang === 'pt' ? 'd.C.' : 'AD')
			: (currentLang === 'pt' ? 'a.C.' : 'BC');
		return `${Math.abs(y)} ${suffix}`;
	}

	function updateLanguageTexts() {
		g.selectAll(".region-label")
			.text(d => translate(d.label));

		g.selectAll(".year-label")
			.text(function() {
				const year = +this.getAttribute("data-year");
				return formatYear(year);
			});

		g.selectAll(".period-label")
			.text(d => translate(d.title));
		
		document.querySelector('[data-year="-10000"]').textContent = t("stoneAge");
		document.querySelector('[data-year="-3300"]').textContent = t("bronzeAge");
		document.querySelector('[data-year="-1200"]').textContent = t("ironAge");
		document.querySelector('[data-year="-800"]').textContent = t("ancientAge");
		document.querySelector('[data-year="600"]').textContent = t("middleAges");
		document.querySelector('[data-year="1500"]').textContent = t("modern");

		document.querySelectorAll('.tag-btn').forEach(btn => {
			const tag = btn.dataset.tag;
			if (tag && translations[currentLang]?.[tag]) {
				btn.textContent = t(tag);
			}
		});
	}


	const regions = [
		{id: "general",  label: {en: "General", pt: "Geral"}, start: -10000, end: 2100},
		{id: "africa", label: {en: "Egypt & North Africa", pt: "Egito & Norte da África"},  start: -10000, end: 2100},
		{id: "mesopotamia",   label: {en: "Mesopotamia", pt: "Mesopotâmia"}, start: -10000, end: 2100},
		{id: "levant", label: {en: "Levant & Arabia", pt: "Levante & Arábia"}, start: -10000, end: 2100},
		{id: "iran", label: {en: "Steppes & Iranian Plateau", pt: "Estepes & Planalto Iraniano"}, start: -5000, end: 2100},
		{id: "easteurope", label: {en: "Eastern Europe & Anatolia", pt: "Europa Oriental & Anatólia"}, start: -3300, end: 2100},
		{id: "westeurope", label: {en: "Western Europe", pt: "Europa Ocidental"}, start: -800, end: 2100},
		{id: "america", label: {en: "The Americas", pt: "Américas"}, start: 1400, end: 2100}
		];
		
	const regionColors = {
		general: "#f8e9d3",
		africa: "#ffc107",
		mesopotamia: "#dd6d22",
		levant: "#33cccc",
		iran: "#2ca02c",
		easteurope: "#702963",
		westeurope: "#d42b3c",
		america: "#236da9"
	};
	const accentColors = {
		general: "#000",
		africa: "#ffc107",
		mesopotamia: "#dd6d22",
		levant: "#33cccc",
		iran: "#2ca02c",
		easteurope: "#702963",
		westeurope: "#d42b3c",
		america: "#236da9"
	};

		const width = IMAGE_WIDTH;
		const height = window.innerHeight;

		const margin = {top: 50, right: 150, bottom: 50, left: 90};
		const timelineHeight = 12100;
		const yearStart = -10000;
		const yearEnd = 2100;

		const yearToY = d3.scaleLinear()
		  .domain([yearStart, -3500, yearEnd])
		  .range([margin.top, margin.top + 500, timelineHeight - margin.bottom]);

		const regionToX = d3.scaleBand()
		  .domain(regions.map(d => d.id))
		  .range([margin.left, width - margin.right])
		  .padding(0.1);

		// Background region bands
		g.selectAll(".region-band")
			.data(regions)
			.enter()
			.append("rect")
			.attr("class", "region-band")
			.attr("x", d => regionToX(d.id))
			.attr("y", d => yearToY(d.start))
			.attr("width", regionToX.bandwidth())
			.attr("height", d => yearToY(d.end) - yearToY(d.start))
			.attr("fill", d => regionColors[d.id] || "#ccc");

		// Region labels
		g.selectAll(".region-label")
		  .data(regions)
		  .enter()
		  .append("text")
		  .attr("class", "region-label")
		  .attr("x", d => regionToX(d.id) + regionToX.bandwidth() / 2)
		  .attr("y", d => yearToY(d.start) - 20)
		  .attr("text-anchor", "middle")
		  .attr("fill", "#333")
		  .text(d => translate(d.label));

		// Year lines
		for (let y = yearStart; y <= yearEnd; y += (y < -3500 ? 500 : 100)) {
		  g.append("line")
			.attr("class", "year-line")
			.attr("x1", margin.left)
			.attr("x2", width - margin.right)
			.attr("y1", yearToY(y))
			.attr("y2", yearToY(y));

		  g.append("text")
			.attr("class", "year-label")
			.attr("x", margin.left - 6)
			.attr("y", yearToY(y) + 0)
			.attr("text-anchor", "end")
			.attr("data-year", y)
			.text(d => formatYear(y));
		}

		//Periods

		d3.json("periods.json").then(periods => {
		  const barGroup = g.append("g");
		  barGroup.selectAll("rect")
			.data(periods)
			.enter()
			.append("rect")
			.attr("x", d => regionToX(d.region))
			.attr("y", d => yearToY(d.start))
			.attr("width", regionToX.bandwidth())
			.attr("height", d => yearToY(d.end) - yearToY(d.start))
			.attr("fill", d => regionColors[d.region])
			.attr("fill-opacity", .25)
			.attr("stroke-opacity", 0.5)
			.attr("stroke-width", 1)
			.attr("stroke", d => accentColors[d.region])
			.attr("class", `period`)
			
			.on("mouseover", (event, d) => {
		  d3.select(event.currentTarget)
			.attr("fill-opacity", 0.5)
			.attr("stroke-width", 3)
			.attr("stroke", "#000");

			  tooltip.html(`<strong>${translate(d.title)}</strong><br>${translate(d.description) || ''}`);
			  tooltip.style("display", "block");
			})
			.on("mousemove", (event) => {
			  tooltip.style("left", (event.pageX + 10) + "px")
					 .style("top", (event.pageY + 10) + "px");
			})
			.on("mouseout", (event) => {
			  d3.select(event.currentTarget)
				.attr("fill-opacity", 0.25)
				.attr("stroke-width", 1)
				.attr("stroke", d => accentColors[d.region]);

			  tooltip.style("display", "none");
			})
			.on("click", (event, d) => {
			  d3.select("#sidebar-content").html(`<h2>${translate(d.title)}</h2>` +
				(d.image ? `<img src="${d.image}" alt="${translate(d.title)}" />` : "") + `<p>${translate(d.text) || ''}</p>`);
			  sidebar.style("display", "block");
			});
		
			barGroup.selectAll("text")
			.data(periods)
			.enter()
			.append("text")
			.attr("x", d => regionToX(d.region) + 5)
			.attr("y", d => yearToY(d.start) + 14)
			.attr("fill", "#4d4d4d")
			.attr("font-size", "12px")
			.attr("opacity", 0.8)
			.attr("class", "period-label")
			.text(d => translate(d.title));
		
		});

		// -- EVENTS -- 

		let allEvents = [];

		d3.json("events.json").then(events => {
		allEvents = events;

		// "All" is active by default
		activeTags = "all";  // <-- use a string, not a Set
		renderEvents(activeTags);

		// Visually mark "All" as active
		document.querySelector('.tag-btn[data-tag="all"]')?.classList.add("active");
		});

	function renderEvents(activeTags) {
		g.selectAll(".event-group, .event-groups").remove();
		const group = g.append("g").attr("class", "event-group");

		const baseSizes = {
			1: { width: 80, height: 16, fontSize: 6, strokeWidth: 1 },
			2: { width: 50, height: 10, fontSize: 4, strokeWidth: 0.5 },
			3: { width: 40, height: 8, fontSize: 3, strokeWidth: 0.5 },
			4: { width: 40, height: 6, fontSize: 2, strokeWidth: 0.5 }
		};

		const zoomLevel = currentZoomLevel || 1;

		const filtered = (activeTags === "all"
			? allEvents
			: allEvents.filter(event =>
				event.tags && event.tags.some(tag => activeTags.has(tag))
			)
		);

		const events = group.selectAll("g.event")
			.data(filtered)
			.enter()
			.append("g")
			.attr("class", "event")
			.attr("transform", d => {
				const p = d.priority || 1;
				const h = baseSizes[p].height;
				const y = yearToY(d.year) - h / 2;
				const lane = d.lane !== undefined ? d.lane : 1; // Default to center lane
				const w = baseSizes[p].width;

				// Divide region band into 3 horizontal lanes
				const totalLanes = 5;
				const laneWidth = regionToX.bandwidth() / totalLanes;

				const laneX = regionToX(d.region) + lane * laneWidth + (laneWidth - w) / 2;
				return `translate(${laneX},${y})`;
			})
			.on("mouseover", function(event, d) {
				d3.select(this).select("rect")
					.attr("fill", accentColors[d.region])
					.attr("stroke", accentColors[d.region])
					.attr("stroke-width", 2);
			
				d3.select(this).select("text")
					.attr("fill", "#fff");
					
				tooltip.html(`<strong>${translate(d.title)}</strong><br>${translate(d.description) || ''}`);
				tooltip.style("display", "block");
		  
				d3.selectAll(".connection-path")
					.classed("connection-highlight", conn => conn.source === d.id || conn.target === d.id)
					.classed("connection-dimmed", conn => conn.source !== d.id && conn.target !== d.id);
					
				const connectedIds = new Set();

				// 1. Outgoing connections from the hovered event
				if (d.connections) {
				  d.connections.forEach(conn => {
					const targetId = typeof conn === "string" ? conn : conn.target;
					if (targetId) connectedIds.add(targetId);
				  });
				}

				// 2. Incoming connections to the hovered event
				filtered.forEach(ev => {
				  if (!ev.connections) return;
				  ev.connections.forEach(conn => {
					const targetId = typeof conn === "string" ? conn : conn.target;
					if (targetId === d.id) connectedIds.add(ev.id);
				  });
				});

				d3.selectAll(".event")
				  .classed("connected-highlight", ev => connectedIds.has(ev.id));

			})
			
			.on("mousemove", function(event) {
				tooltip.style("left", (event.pageX + 10) + "px")
					.style("top", (event.pageY + 10) + "px");
			})
			.on("mouseout", function(event, d) {
				d3.select(this).select("rect")
					.attr("fill", "#fff")
					.attr("stroke", accentColors[d.region])
					.attr("stroke-width", d => {
						const p = d.priority || 1;
						return baseSizes[p].strokeWidth;
					});
					
					d3.select(this).select("text")
					.attr("fill", "#000");
					
					tooltip.style("display", "none");
				  
					d3.selectAll(".connection-path")
					.classed("connection-highlight", false)
					.classed("connection-dimmed", false);
					
					d3.selectAll(".event")
					.classed("connected-highlight", false);

			})
		.on("click", function(event, d) {
			updateSidebar(d);
			sidebar.style("display", "block");
		});


		// GROUP RENDERING

		const groupEvents = filtered.filter(e => e.type === "group" && e.start !== undefined && e.end !== undefined);

		const groupG = g.append("g").attr("class", "event-groups");

		groupG.selectAll("rect.group-event")
			.data(groupEvents)
			.enter()
			.append("rect")
			.attr("class", "group-event")
			.attr("y", d => yearToY(d.start))
			.attr("x", d => {
				const childEvents = filtered.filter(ev =>
					ev.group === d.id  // ← only select events explicitly linked to this group
				);

				const positions = childEvents.map(ev => {
				const p = ev.priority || 1;
				const w = baseSizes[p].width;
				const lane = ev.lane !== undefined ? ev.lane : 1;
				const totalLanes = 5;
				const laneWidth = regionToX.bandwidth() / totalLanes;

				return regionToX(ev.region) + lane * laneWidth + (laneWidth - w) / 2;
				});

				if (positions.length > 0) {
					return Math.min(...positions) - 5; // left pad
				} else {
					return regionToX(d.region); // fallback
				}
			})
		.attr("width", d => {
			const childEvents = filtered.filter(ev =>
				ev.group === d.id
			);

			const positions = childEvents.map(ev => {
			const p = ev.priority || 1;
			const w = baseSizes[p].width;
			const lane = ev.lane !== undefined ? ev.lane : 1;
			const totalLanes = 5;
			const laneWidth = regionToX.bandwidth() / totalLanes;

			const x = regionToX(ev.region) + lane * laneWidth + (laneWidth - w) / 2;
				return { left: x, right: x + w };
			});

			if (positions.length > 0) {
				const minX = Math.min(...positions.map(p => p.left)) - 5;
				const maxX = Math.max(...positions.map(p => p.right)) + 5;
				return maxX - minX;
			} else {
				return regionToX.bandwidth(); // fallback
			}
		})
		.attr("height", d => yearToY(d.end) - yearToY(d.start))
		.attr("fill", "none")
		.attr("fill-opacity", "0.1")
		.attr("stroke", "#000")
		.attr("stroke-width", 0.5)
		.on("mouseover", (event, d) => {
			tooltip.html(`<strong>${translate(d.title)}</strong><br>${translate(d.description) || ''}`);
			tooltip.style("display", "block");
		})
		.on("mousemove", (event) => {
			tooltip.style("left", (event.pageX + 10) + "px")
			.style("top", (event.pageY + 10) + "px");
		})
		.on("mouseout", () => {
			tooltip.style("display", "none");
		})
		.on("click", (event, d) => {
			d3.select("#sidebar-content").html(`<h2>${translate(d.title)}</h2>` +
			(d.image ? `<img src="${d.image}" alt="${translate(d.title)}" />` : "") + `<p>${translate(d.text) || ''}</p>`);
			sidebar.style("display", "block");
		});

		// Optional label
		groupG.selectAll("text.group-label")
		.data(groupEvents)
		.enter()
		.append("text")
		.attr("class", "group-label")
		.attr("x", d => {
			const childEvents = filtered.filter(ev =>
				ev.group === d.id
			);

			const positions = childEvents.map(ev => {
				const p = ev.priority || 1;
				const w = baseSizes[p].width;
				const lane = ev.lane !== undefined ? ev.lane : 1;
				const totalLanes = 5;
				const laneWidth = regionToX.bandwidth() / totalLanes;

				const x = regionToX(ev.region) + lane * laneWidth + (laneWidth - w) / 2;
				return { left: x, right: x + w };
			});

			if (positions.length > 0) {
				const minX = Math.min(...positions.map(p => p.left));
				const maxX = Math.max(...positions.map(p => p.right));
				return (minX + maxX) / 2;
				} else {
					return regionToX(d.region) + regionToX.bandwidth() / 2; // fallback
				}
		})
		.attr("y", d => yearToY(d.start) + 8)
		.attr("text-anchor", "middle")
		.attr("font-size", "5px")
		.attr("fill", "#555")
		.text(d => translate(d.title));

		events.append("rect")
			.attr("width", d => {
				const p = d.priority || 1;
				return baseSizes[p].width;
			})
			.attr("height", d => {
				const p = d.priority || 1;
				return baseSizes[p].height;
			})
			.attr("fill", "#fff")
			.attr("class", d => `event-type-${d.type}`)
			.attr("stroke", d => accentColors[d.region])
			.attr("rx", 1)
			.attr("stroke-width", d => {
				const p = d.priority || 1;
				return baseSizes[p].strokeWidth;
			});
			
			events.each(function (d) {
				const group = d3.select(this);
				const type = d.type;
				const p = d.priority || 1;

				const w = baseSizes[p].width;
				const h = baseSizes[p].height;
				const fontSize = baseSizes[p].fontSize;

				const text = group.append("text")
					.text(d => translate(d.title))
					.attr("x", w / 2)
					.attr("y", h / 2)
					.attr("font-size", fontSize)
					.attr("fill", "#000")
					.attr("text-anchor", "middle")
					.attr("dominant-baseline", "middle")
					.attr("pointer-events", "none")
					.attr("font-weight", "500");
			});

			// -- CONNECTIONS --

		const eventPositions = new Map();

		events.each(function(d) {
			const p = d.priority || 1;
			const w = baseSizes[p].width;
			const h = baseSizes[p].height;

			const lane = d.lane !== undefined ? d.lane : 1;
			const totalLanes = 5;
			const laneWidth = regionToX.bandwidth() / totalLanes;
			const x = regionToX(d.region) + lane * laneWidth + (laneWidth - w) / 2;
			const y = yearToY(d.year) - h / 2;

			eventPositions.set(d.id, {
				x, y, width: w, height: h,
				cx: x + w / 2, cy: y + h / 2
			});
		});

		g.selectAll(".connections").remove();  // Clears old paths
		const connectionGroup = g.insert("g", ".event-group").attr("class", "connections");


		filtered.forEach(d => {
			if (!d.connections) return;
			const source = eventPositions.get(d.id);
			if (!source) return;

			d.connections.forEach(conn => {
				const targetId = typeof conn === "string" ? conn : conn.target;
				const label = typeof conn === "string" ? "" : translate(conn.label || "");
				const type = typeof conn === "string" ? "" : (conn.type || "");

				const target = eventPositions.get(targetId);
				if (!target) return;

				const dx = target.cx - source.cx;
				const dy = target.cy - source.cy;

				// Decide direction: right/left or top/bottom
				const horizontal = Math.abs(dx) > Math.abs(dy);

				// Connection points: edge to edge
				const startX = horizontal
				  ? (dx > 0 ? source.x + source.width : source.x) // right or left edge
				  : source.cx;
				const startY = horizontal
				  ? source.cy
				  : (dy > 0 ? source.y + source.height : source.y); // bottom or top edge

				const endX = horizontal
				  ? (dx > 0 ? target.x : target.x + target.width)
				  : target.cx;
				const endY = horizontal
				  ? target.cy
				  : (dy > 0 ? target.y : target.y + target.height);

				// Bezier control points
				const curvature = 0.1;
				const cx1 = horizontal ? startX + dx * curvature : startX;
				const cy1 = horizontal ? startY : startY + dy * curvature;
				const cx2 = horizontal ? endX - dx * curvature : endX;
				const cy2 = horizontal ? endY : endY - dy * curvature;

				const path = `M${startX},${startY} C${cx1},${cy1} ${cx2},${cy2} ${endX},${endY}`;

				connectionGroup.append("path")
				.attr("d", path)
				.attr("fill", "none")
				.attr("stroke", "#333")
				.attr("stroke-width", 1)
				.attr("class", `connection-path connection-type-${type}`)
				.datum({ source: d.id, target: targetId, label })  // ← store label info
				.on("mouseover", function(event, d) {
				if (d.label) {
				  tooltip.html(`<strong>${d.label}</strong>`);
				  tooltip.style("display", "block");
				}
				})
				.on("mousemove", function(event) {
				tooltip.style("left", (event.pageX + 10) + "px")
					   .style("top", (event.pageY + 10) + "px");
				})
				.on("mouseout", function() {
				tooltip.style("display", "none");
				});
			});
		});
	}

		// Zoom & pan

	let currentTransform = d3.zoomIdentity;

	function zoomed(event) {
		const { k, x, y } = event.transform;
		currentZoomLevel = k;
		
		currentTransform = event.transform;
		g.attr("transform", currentTransform.toString());
		
		renderEvents(activeTags);
		updateScrollbars();
	}

	const zoom = d3.zoom()
	  .scaleExtent([0.2, 10])
	  .translateExtent([[0, 0], [IMAGE_WIDTH + 200, IMAGE_HEIGHT + 200]])
	  .on("zoom", zoomed);

	svg.call(zoom);

	window.addEventListener("keydown", e => {
	  const { x, y, k } = d3.zoomTransform(svg.node());
	  const step = 100 / k;

	  let tx = x, ty = y;
	  if (e.key === "ArrowLeft") tx += step;
	  if (e.key === "ArrowRight") tx -= step;
	  if (e.key === "ArrowUp") ty += step;
	  if (e.key === "ArrowDown") ty -= step;

	  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
		svg.transition().duration(100)
		  .call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(k));
	  }
	});

	const guideLine = g.append("line")
	  .attr("class", "mouse-guide-line")
	  .attr("stroke", "#888")
	  .attr("stroke-width", 1)
	  .style("display", "none");

	const guideLabel = g.append("text")
	  .attr("class", "mouse-guide-label")
	  .attr("x", margin.left)
	  .attr("fill", "#333")
	  .attr("font-size", "12px")
	  .attr("font-weight", "bold")
	  .attr("text-anchor", "start")
	  .style("display", "none");

	svg.on("mousemove", function (event) {
	  const [mouseX, mouseY] = d3.pointer(event);
	  const transform = d3.zoomTransform(svg.node());
	  const y = (mouseY - transform.y) / transform.k;
	  const year = Math.round(yearToY.invert(y));

	  // Show and move the line
		guideLine
			.attr("x1", 0)
			.attr("x2", width)
			.attr("y1", y)
			.attr("y2", y)
			.style("display", "block")
			.attr("stroke-width", 1 / transform.k);

		const leftEdge = -transform.x / transform.k + 10;

		guideLabel
			.attr("x", leftEdge)
			.attr("y", y)
			.text(formatYear(year))
			.style("font-size", `${14 / transform.k}px`)
			.style("display", "block");
	});

	svg.on("mouseleave", () => {
	  guideLine.style("display", "none");
	  guideLabel.style("display", "none");
	});

	// Scrollbars
	
	function updateScrollbars() {
	const zoomK = currentTransform.k;
	const translateX = currentTransform.x;
	const translateY = currentTransform.y;

	const viewWidth = width;
	const viewHeight = height;

	const totalWidth = IMAGE_WIDTH * zoomK;
	const totalHeight = IMAGE_HEIGHT * zoomK;

	const hRatio = viewWidth / totalWidth;
	const vRatio = viewHeight / totalHeight;

	const hThumbWidth = Math.max(hRatio * viewWidth, 30);
	const vThumbHeight = Math.max(vRatio * viewHeight, 30);

	const hLeft = -translateX * hRatio;
	const vTop = -translateY * vRatio;

	d3.select("#h-scrollbar")
	.style("width", `${hThumbWidth}px`)
	.style("left", `${hLeft}px`);

	d3.select("#v-scrollbar")
	.style("height", `${vThumbHeight}px`)
	.style("top", `${vTop}px`);
	}
	
	const dragHorizontal = d3.drag().on("drag", function (event) {
	const dx = event.dx;
	const zoomK = currentTransform.k;
	const totalWidth = IMAGE_WIDTH * zoomK;
	const ratio = width / totalWidth;
	const moveX = -dx / ratio;

	svg.transition().duration(0)
	.call(zoom.translateBy, moveX, 0);
	});

	const dragVertical = d3.drag().on("drag", function (event) {
	const dy = event.dy;
	const zoomK = currentTransform.k;
	const totalHeight = IMAGE_HEIGHT * zoomK;
	const ratio = height / totalHeight;
	const moveY = -dy / ratio;

	svg.transition().duration(0)
	.call(zoom.translateBy, 0, moveY);
	});

	d3.select("#h-scrollbar").call(dragHorizontal);
	d3.select("#v-scrollbar").call(dragVertical);

	updateScrollbars();

	// Zoom Buttons
    function zoomBy(factor) {
		d3.select('#timeline')
		.transition()
		.duration(300)
		.call(zoom.scaleBy, factor);
	}

	function resetZoom() {
  d3.select('#timeline')
    .transition()
    .duration(300)
    .call(zoom.transform, d3.zoomIdentity)
    .on('end', () => {
      currentZoomLevel = 1;
      renderEvents(activeTags);
      updateScrollbars();
    });
}

	// Era buttons
document.querySelectorAll('.age-select').forEach(btn => {
  btn.addEventListener('click', () => {
    const year = parseInt(btn.dataset.year);
    const y = yearToY(year); // This gives the Y coordinate in full timeline space

    // Compute new translation to center this Y in the viewport
    const centerX = IMAGE_WIDTH / 2;
    const centerY = y;

    svg.transition().duration(500).call(
      zoom.transform,
      d3.zoomIdentity
        .translate(width / 2 - centerX * currentZoomLevel, height / 10 - centerY * currentZoomLevel)
        .scale(currentZoomLevel)
    );
  });
});

	// Filter buttons
	document.querySelectorAll('.tag-btn').forEach(btn => {
  const tag = btn.dataset.tag;

  if (tag !== undefined) {
	btn.addEventListener('click', () => {
	  // Handle "all" toggle
	  if (tag === "all") {
		const isActive = btn.classList.toggle("active");

		if (isActive) {
		  activeTags = "all";

		  // Unmark all other tags
		  document.querySelectorAll('.tag-btn').forEach(b => {
			if (b.dataset.tag !== "all") {
			  b.classList.remove("active");
			  b.dataset.active = "false";
			}
		  });

		  renderEvents(activeTags);
		} else {
		  activeTags = new Set(); // show nothing
		  renderEvents(activeTags);
		}

		return;
	  }

	  // If any specific tag is clicked, deactivate "all"
	  document.querySelector('.tag-btn[data-tag="all"]')?.classList.remove("active");

	  // Ensure activeTags is a Set
	  if (typeof activeTags === "string") activeTags = new Set();

	  const isActive = btn.classList.toggle("active");

	  if (isActive) {
		activeTags.add(tag);
		btn.dataset.active = "true";
	  } else {
		activeTags.delete(tag);
		btn.dataset.active = "false";
	  }

	  renderEvents(activeTags);
	});
  }
});

	function sideToggle() {
	var x = document.getElementById("side");
	var b = document.getElementById("closebtn");
	if (x.style.display === "none") {
		x.style.display = "block";
		b.className = "fa-solid fa-chevron-left";
	} else {
		x.style.display = "none";
		b.className = "fa-solid fa-chevron-right"
	}
}

 // Charts //

	let allGraphs = {};

	fetch("graphs.json")
	  .then(res => res.json())
	  .then(data => {
		allGraphs = data;
	});


	function updateSidebar(d) {
		const container = d3.select("#sidebar-content");
		container.html("");  // Clear previous content

		container.append("h2").text(translate(d.title));

		if (d.image) {
			container.append("img")
				.attr("src", d.image)
				.attr("alt", translate(d.title));
		}

		container.append("p").text(translate(d.text) || "");

		if (d.expandedView) {
			container.append("button")
				.attr("id", "open-subgraph")
				.text("Explore Related Events")
				.attr("class", "subgraph-btn")
				.on("click", () => {
			  openSubgraphModal(d.expandedView); // CHANGED
			  console.log("Button click detected");
			});
		}
	}

	function openSubgraphModal(graphId) {
		if (!allGraphs[graphId]) return;
		document.getElementById("modal-overlay").style.display = "flex";
		renderMiniGraph(graphId);
	}

	document.getElementById("modal-close").addEventListener("click", () => {
		document.getElementById("modal-overlay").style.display = "none";
		d3.select("#mini-graph").selectAll("*").remove();  // clean up
	});

	function renderMiniGraph(graphId) {
		d3.select("#mini-graph").selectAll("*").remove();

		const graphData = allGraphs[graphId];
		if (!graphData) return;

		const events = graphData.events;
		const baseSizes = {
			1: { width: 160, height: 30, fontSize: 16, strokeWidth: 1 },
			2: { width: 80, height: 16, fontSize: 6, strokeWidth: 1 },
			3: { width: 40, height: 8, fontSize: 3, strokeWidth: 0.5 },
			4: { width: 40, height: 6, fontSize: 2, strokeWidth: 0.5 }
		};

		const years = events.map(e => e.year);
		const minYear = Math.min(...years) - 10;
		const maxYear = Math.max(...years) + 10;

		const minPixelsPerYear = 0.5;
		const maxPixelsPerYear = 6;
		
		const yearSpan = maxYear - minYear;
		let pixelsPerYear = 600 / yearSpan;

		pixelsPerYear = Math.max(minPixelsPerYear, Math.min(maxPixelsPerYear, pixelsPerYear));

		const yOffset = 50;
		const svgHeight = yOffset + yearSpan * pixelsPerYear + 50;

		const yearToY = d3.scaleLinear()
		  .domain([minYear, maxYear])
		  .range([yOffset, yOffset + yearSpan * pixelsPerYear]);
			

		const svg = d3.select("#mini-graph")
			.append("svg")
			.attr("width", "100%")
			.attr("height", svgHeight)
			.call(d3.zoom().on("zoom", event => {
				g.attr("transform", event.transform);
			}));

const g = svg.append("g")
  .attr("class", "mini-event-group")
  .attr("transform", "translate(40,0)"); // shift right so year labels are visible

  // Add year lines
  const yearStep = 50;
  for (let y = Math.ceil(minYear / yearStep) * yearStep; y <= maxYear; y += yearStep) {
    g.append("line")
      .attr("x1", 50)
      .attr("x2", 2000)
      .attr("y1", yearToY(y))
      .attr("y2", yearToY(y))
	  .attr("stroke-opacity", 0.5)
	  .attr("class", "year-line");

    g.append("text")
      .attr("x", 5)
      .attr("y", yearToY(y))
	  .attr("class", "year-label")
      .text(y);
  }

  const totalLanes = 10;

  const eventPositions = new Map();

  const eventGroups = g.selectAll("g.mini-event")
    .data(events)
    .enter()
    .append("g")
	.attr("class", d => `event-type-${d.type} mini-event`)
    .attr("transform", d => {
      const p = d.priority || 1;
      const h = baseSizes[p].height;
      const y = yearToY(d.year) - h / 2;

      const lane = d.lane !== undefined ? d.lane : 2;
      const w = baseSizes[p].width;
      const laneWidth = 200;
	  const x = 100 + lane * laneWidth;

      eventPositions.set(d.id, {
        x, y, width: w, height: h,
        cx: x + w / 2,
        cy: y + h / 2
      });

      return `translate(${x},${y})`;
    });

  // Rectangles
  eventGroups.append("rect")
    .attr("width", d => baseSizes[d.priority || 1].width)
    .attr("height", d => baseSizes[d.priority || 1].height)
    .attr("fill", "#fff")
    .attr("stroke", d => accentColors[d.region] || "#999")
    .attr("stroke-width", d => baseSizes[d.priority || 1].strokeWidth);

  // Labels
  eventGroups.append("text")
    .attr("x", d => (baseSizes[d.priority || 1].width / 2))
    .attr("y", d => (baseSizes[d.priority || 1].height / 2))
    .attr("text-anchor", "middle")
	.attr("dominant-baseline", "middle")
    .attr("fill", "#000")
    .attr("font-size", d => baseSizes[d.priority || 1].fontSize)
    .text(d => translate(d.title));

	svg.append("defs").append("marker")
		.attr("id", "arrowhead")
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", 10)
		.attr("refY", 0)
		.attr("markerWidth", 6)
		.attr("markerHeight", 6)
		.attr("orient", "auto")
		.attr("markerUnits", "strokeWidth")
		.append("path")
			.attr("d", "M0,-5L10,0L0,5");


  // Connections
const connectionGroup = g.insert("g", ".mini-event").attr("class", "connections");

events.forEach(d => {
  if (!d.connections) return;
  const source = eventPositions.get(d.id);
  if (!source) return;

  d.connections.forEach(conn => {
    const targetId = typeof conn === "string" ? conn : conn.target;
    const label = typeof conn === "string" ? "" : translate(conn.label || "");
    const type = typeof conn === "string" ? "" : (conn.type || "");
    const target = eventPositions.get(targetId);
    if (!target) return;

    let path, pathArrow;

    if (typeof conn === "object" && Array.isArray(conn.points)) {
      // === Use multi-point path ===
      const points = [];
      points.push({ x: source.cx, y: source.cy });
      conn.points.forEach(p => points.push(p));
      points.push({ x: target.cx, y: target.cy });

      // Cut off final segment for arrowhead
      const arrowLength = 8;
      const penultimate = points[points.length - 2];
      const final = points[points.length - 1];

      const line = d3.line()
		.x(p => p.x)
		.y(p => p.y)
		

      // Define rectangle boundary at target
		const targetWidth = baseSizes[target.priority || 1].width;
		const targetHeight = baseSizes[target.priority || 1].height;
		const boxPadding = 1;  // Slight offset to avoid visual collision

		// Direction of connection (angle)
		const dx = final.x - penultimate.x;
		const dy = final.y - penultimate.y;
		const angle = Math.atan2(dy, dx);
		const horizontal = Math.abs(dx) > Math.abs(dy);

		// Determine final endpoint at the edge of the rectangle
		const rx = targetWidth / 2 + boxPadding;
		const ry = targetHeight / 2 + boxPadding;

		// Normalize direction
		const norm = Math.sqrt((dx * dx) / (rx * rx) + (dy * dy) / (ry * ry));
		const offsetX = (dx / norm);
		const offsetY = (dy / norm);

		// Compute cut point (just outside the box)
		const cutX = target.cx - offsetX;
		const cutY = target.cy - offsetY;
		
		const endX = horizontal ? (dx > 0 ? target.x : target.x + target.width) : target.cx;
		const endY = horizontal ? target.cy : (dy > 0 ? target.y : target.y + target.height);

		// Create smooth path that ends before hitting the box
		const pointsMain = [...points.slice(0, -1), { x: cutX, y: cutY }];
		path = line(pointsMain);

		// Arrow goes from the cutoff point to the edge
		pathArrow = `M${cutX},${cutY} L${endX},${endY}`;
    } else {
      // === Use curved path fallback ===
      const dx = target.cx - source.cx;
      const dy = target.cy - source.cy;
      const horizontal = Math.abs(dx) > Math.abs(dy);

      const startX = horizontal ? (dx > 0 ? source.x + source.width : source.x) : source.cx;
      const startY = horizontal ? source.cy : (dy > 0 ? source.y + source.height : source.y);
      const endX = horizontal ? (dx > 0 ? target.x : target.x + target.width) : target.cx;
      const endY = horizontal ? target.cy : (dy > 0 ? target.y : target.y + target.height);

      const curvature = 0.2;
      const cx1 = horizontal ? startX + dx * curvature : startX;
      const cy1 = horizontal ? startY : startY + dy * curvature;
      const cx2 = horizontal ? endX - dx * curvature : endX;
      const cy2 = horizontal ? endY : endY - dy * curvature;

      const arrowLength = 8;
      const angle = Math.atan2(endY - cy2, endX - cx2);
      const tailX = endX - arrowLength * Math.cos(angle);
      const tailY = endY - arrowLength * Math.sin(angle);

      path = `M${startX},${startY} C${cx1},${cy1} ${cx2},${cy2} ${tailX},${tailY}`;
      pathArrow = `M${tailX},${tailY} L${endX},${endY}`;
    }

    // Main path
    connectionGroup.append("path")
      .attr("d", path)
      .attr("fill", "none")
      .attr("stroke", "#333")
      .attr("stroke-width", 1)
      .attr("class", `connection-path connection-from-${d.id} connection-to-${targetId}`)
      .datum({ source: d.id, target: targetId, label });

    // Arrowhead path
    connectionGroup.append("path")
      .attr("d", pathArrow)
      .attr("fill", "none")
      .attr("stroke", "#333")
      .attr("stroke-width", 1)
      .attr("marker-end", "url(#arrowhead)")
      .attr("class", `connection-path connection-from-${d.id} connection-to-${targetId}`)
      .datum({ source: d.id, target: targetId, label });
  });
});


  // Hover logic
  g.selectAll("g.mini-event")
    .on("mouseover", function(event, d) {
      d3.select(this).select("rect")
        .attr("fill", accentColors[d.region])
        .attr("stroke-width", 2);

		d3.select(this).select("text").attr("fill", "#fff");

		const connectedIds = new Set();

		// Outgoing connections from d
		if (d.connections) {
			d.connections.forEach(conn => {
				const targetId = typeof conn === "string" ? conn : conn.target;
				if (targetId) connectedIds.add(targetId);
			});
		}

		// Incoming connections to d
		events.forEach(ev => {
			if (!ev.connections) return;
			ev.connections.forEach(conn => {
				const targetId = typeof conn === "string" ? conn : conn.target;
				if (targetId === d.id) connectedIds.add(ev.id);
			});
		});

		// Highlight connections
		g.selectAll(".connection-path")
		.classed("connection-highlight", conn => conn.source === d.id || conn.target === d.id)
		.classed("connection-dimmed", conn => conn.source !== d.id && conn.target !== d.id);

		// Highlight connected events
		g.selectAll("g.mini-event")
		.classed("connected-highlight", ev => connectedIds.has(ev.id));
		
		tooltip.html(`<strong>${translate(d.title)}</strong><br>${translate(d.description) || ''}`);
		tooltip.style("display", "block");
    })
	.on("mousemove", (event) => {
		tooltip.style("left", (event.pageX + 10) + "px")
				.style("top", (event.pageY + 10) + "px");
		})
    .on("mouseout", function(event, d) {
      d3.select(this).select("rect")
        .attr("fill", "#fff")
        .attr("stroke", accentColors[d.region])
        .attr("stroke-width", baseSizes[d.priority || 1].strokeWidth);

        d3.select(this).select("text").attr("fill", "#000");

		g.selectAll(".connection-path")
			.classed("connection-highlight", false)
			.classed("connection-dimmed", false);

		g.selectAll("g.mini-event")
			.classed("connected-highlight", false);
		
		tooltip.style("display", "none");
    });
}
