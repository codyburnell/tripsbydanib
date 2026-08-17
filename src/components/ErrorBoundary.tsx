import React from "react";

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="section">
          <div className="container">
            <h1>Looks like this page took an unexpected detour.</h1>
            <p>Please refresh or return to the homepage.</p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
