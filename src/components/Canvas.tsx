"use client";

import { useCallback, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  EdgeTypes,
  MarkerType,
  MiniMap,
  Node,
  NodeTypes,
  OnConnect,
  ReactFlowInstance,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import TextUpdaterNode from "./CustomNode/TextUpdaterNode";
import TextUpdaterEdge from "./CustomEdge/TextUpdaterEdge";
import LinkNode from "./CustomNode/LinkNode";

const initialNodes: Node[] = [
  {
    id: "1",
    data: { label: "Hello From Lucy's Chart Creator" },
    position: { x: 250, y: 5 },
  },
];

const initEdges: Edge[] = [];

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes: NodeTypes = {
  textUpdater: TextUpdaterNode,
  linkNode: LinkNode,
};

const edgeTypes: EdgeTypes = {
  textUpdater: TextUpdaterEdge,
};

const Canvas = () => {
  //used for get the position of the ReactFlow component and calculate nodes' positions relative to this component
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initEdges);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  const onConnect: OnConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "textUpdater",
            markerEnd: { type: MarkerType.ArrowClosed },
          },
          eds
        )
      ),
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current!.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }
      //transforms pixel coordinates to the internal ReactFlow coordinate system
      const position = reactFlowInstance!.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      // update/ append the new node to the Flow
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const proOptions = { hideAttribution: true };
  return (
    <div className="w-full h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        proOptions={proOptions}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        className="bg-teal-50"
      >
        <Background color="#888" gap={16} />
        <MiniMap
          nodeColor={(n) => {
            if (n.type === "textUpdater") return "#FFC0CB";
            return "#FFCC00";
          }}
        />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
