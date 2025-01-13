import React from 'react';
import Card from '../components/Card';

export default function Main() {
  return (
    <main>
      <ul>
        <Card id={1} />
        <Card id={2} />
        <Card id={3} />
        <Card id={4} />
        <Card id={5} />
        <Card id={6} />
      </ul>
    </main>
  );
}
