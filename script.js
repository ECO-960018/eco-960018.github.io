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
		//updateStaticLabels()
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
		{id: "africa", label: {en: "Egypt & North Africa", pt: "Egito & Norte da África"},  start: -10000, end: 600},
		{id: "mesopotamia",   label: {en: "Mesopotamia", pt: "Mesopotâmia"}, start: -10000, end: 600},
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
		g.selectAll(".event-group").remove();
		const group = g.append("g").attr("class", "event-group");

		const baseSizes = {
			1: { width: 80, height: 16, fontSize: 6, strokeWidth: 1 },
			2: { width: 50, height: 10, fontSize: 4, strokeWidth: 0.5 },
			3: { width: 40, height: 8, fontSize: 2, strokeWidth: 0.5 },
			4: { width: 40, height: 6, fontSize: 1, strokeWidth: 0.5 }
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
			})
		.on("click", function(event, d) {
			d3.select("#sidebar-content").html(`<h2>${translate(d.title)}</h2>` +
				(d.image ? `<img src="${d.image}" alt="${translate(d.title)}" />` : "") + `<p>${translate(d.text) || ''}</p>`);
				sidebar.style("display", "block");
		});

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
				const label = typeof conn === "string" ? "" : (conn.label || "");
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