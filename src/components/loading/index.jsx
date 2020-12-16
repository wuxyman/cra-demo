import React from 'react';

export const Loading = () => {
  return <div className="loading">、、、</div>;
};

export default function LoadContainer() {
  // const state = useGlobalState();

  const loading = false;

  return loading ? <Loading /> : null;
}
