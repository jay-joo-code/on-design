import React from 'react';
import Matter from 'matter-js';
import s from 'styled-components';

const Container = s.div`
    /*& > canvas {
        background-color: white !important;
    }*/
`;

class Catapult extends React.Component {
  componentDidMount() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const {
      Engine,
      Render,
      Runner,
      Composites,
      Constraint,
      World,
      Bodies,
      Body,
      Vector,
    } = Matter;

    // create engine
    const engine = Engine.create();
    const { world } = engine;

    // create renderer
    const render = Render.create({
      element: this.refs.scene,
      engine,
      options: {
        width: vw,
        height: vh * 0.7,
        showAngleIndicator: false,
        showCollisions: false,
        showVelocity: false,
        background: 'transparent',
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    const group = Body.nextGroup(true);

    const stack = Composites.stack(250, 255, 1, 8, 0, 0, (x, y) => Bodies.rectangle(x, y, 30, 30, {
      render: {
        fillStyle: '#FF0000',
        strokeStyle: 'blue',
        lineWidth: 3,
      },
    }));

    const catapult = Bodies.rectangle(400, 520, 320, 20, {
      collisionFilter: { group },
      render: {
        fillStyle: 'red',
        strokeStyle: 'blue',
        lineWidth: 3,
      },
    });
    const box = Bodies.rectangle(400, 600, 800, 50.5, {
      isStatic: true,
      render: {
        fillStyle: 'red',
        strokeStyle: 'blue',
        lineWidth: 3,
      },
    });
    World.add(world, [
      stack,
      catapult,
      box,
      Bodies.rectangle(250, 555, 20, 50, { isStatic: true }),
      Bodies.rectangle(400, 535, 20, 80, { isStatic: true, collisionFilter: { group } }),
      Bodies.circle(560, 100, 50, { density: 0.005 }),
      Constraint.create({
        bodyA: catapult,
        pointB: Vector.clone(catapult.position),
        stiffness: 1,
        length: 0,
      }),
    ]);

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });
  }

  render() {
    return (
      <Container ref="scene" />
    );
  }
}

export default Catapult;
