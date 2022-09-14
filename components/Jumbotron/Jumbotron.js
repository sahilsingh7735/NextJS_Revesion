import { useRouter } from "next/router";
import React from "react";

const Jumbotron = () => {
  const router = useRouter();
  return (
    <div class="jumbotron jumbotron-fluid mt-5">
      <div class="container">
        <h1 class="display-4">Cat World</h1>
        <p class="lead">Find your best friend today!</p>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => router.push("/cats")}
        >
          Start Looking
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
