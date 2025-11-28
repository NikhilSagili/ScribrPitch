import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { D3TreeBlockData } from '../types';

interface D3TreeProps {
  data: D3TreeBlockData['data'];
}


const D3Tree: React.FC<D3TreeProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data) return;

    d3.select(svgRef.current).selectAll('*').remove();


    const svg = d3.select(svgRef.current)
      .append('g')
      .attr('transform', 'translate(120,0)');

    let i = 0;
    const duration = 750;
    let root: any;

    const treemap = d3.tree().nodeSize([40, 180]);

    root = d3.hierarchy(data, d => d.children);
    root.x0 = 0;
    root.y0 = 0;

    root.children.forEach(collapse);

    update(root);

    function collapse(d: any) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    function update(source: any) {
      const treeData = treemap(root);
      const nodes = treeData.descendants();
      const links = treeData.descendants().slice(1);

      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      nodes.forEach(d => {
        minX = Math.min(minX, d.x);
        maxX = Math.max(maxX, d.x);
        minY = Math.min(minY, d.y);
        maxY = Math.max(maxY, d.y);
      });

      const newWidth = maxY - minY + 300; // Add padding
      const newHeight = maxX - minX + 100; // Add padding

      d3.select(svgRef.current)
        .transition().duration(duration)
        .attr('width', newWidth)
        .attr('height', newHeight);
      
      svg.transition().duration(duration)
        .attr('transform', `translate(120, ${-minX + 50})`);

      nodes.forEach(d => { d.y = d.depth * 180; });

      const node = svg.selectAll('g.node').data(nodes, (d: any) => d.id || (d.id = ++i));

      const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', () => `translate(${source.y0},${source.x0})`)
        .on('click', click)
        .on('mouseover', (_event, d: any) => {
          if (d.data.description && tooltipRef.current) {
            d3.select(tooltipRef.current).transition().duration(200).style('opacity', 1);
            d3.select(tooltipRef.current)
              .html(d.data.description)
              .style('left', `${d.y + 130}px`)
              .style('top', `${d.x}px`);
          }
        })
        .on('mouseout', () => {
          if (tooltipRef.current) {
            d3.select(tooltipRef.current).transition().duration(500).style('opacity', 0);
          }
        });

      nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style('fill', (d: any) => d._children ? '#d02020' : '#fff')
        .style('stroke', '#d02020')
        .style('stroke-width', '2px');

      nodeEnter.append('text')
        .attr('dy', '.35em')
        .attr('x', (d: any) => d.children || d._children ? -13 : 13)
        .attr('text-anchor', (d: any) => d.children || d._children ? 'end' : 'start')
        .text((d: any) => d.data.name)
        .style('font-family', '"Space Grotesk", sans-serif')
        .style('font-size', '12px')
        .style('fill', '#222')
        .style('text-shadow', '0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff');

      const nodeUpdate = nodeEnter.merge(node as any);

      nodeUpdate.transition().duration(duration)
        .attr('transform', (d: any) => `translate(${d.y},${d.x})`);

      nodeUpdate.select('circle.node')
        .attr('r', 8)
        .style('fill', (d: any) => d._children ? '#d02020' : '#fff')
        .attr('cursor', (d: any) => d._children || d.children ? 'pointer' : 'default');

      const nodeExit = node.exit().transition().duration(duration)
        .attr('transform', () => `translate(${source.y},${source.x})`)
        .remove();

      nodeExit.select('circle').attr('r', 1e-6);
      nodeExit.select('text').style('fill-opacity', 1e-6);

      const link = svg.selectAll('path.link').data(links, (d: any) => d.id);

      const linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', () => {
          const o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        })
        .style('fill', 'none')
        .style('stroke', '#dcd8cc')
        .style('stroke-width', '1.5px');

      const linkUpdate = linkEnter.merge(link as any);

      linkUpdate.transition().duration(duration)
        .attr('d', (d: any) => diagonal(d, d.parent));

      link.exit().transition().duration(duration)
        .attr('d', () => {
          const o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .remove();

      nodes.forEach((d: any) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      function diagonal(s: any, d: any) {
        const path = `M ${s.y} ${s.x}
                  C ${(s.y + d.y) / 2} ${s.x},
                    ${(s.y + d.y) / 2} ${d.x},
                    ${d.y} ${d.x}`;
        return path;
      }

      function click(_event: any, d: any) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }
    }
  }, [data]);

  return (
    <div className="relative d3-tree-container">
      <svg ref={svgRef}></svg>
      <div ref={tooltipRef} className="d3-tooltip" style={{ opacity: 0 }}></div>
    </div>
  );
};

export default D3Tree;




