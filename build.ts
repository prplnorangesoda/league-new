#!/usr/bin/env bun

import { $ } from "bun";

async function build_frontend() {
  console.log("[FRONTEND] building...");
  let result = await $`bun run build`.cwd("league-frontend").nothrow().quiet();

  if (result.exitCode != 0) {
    console.log("[FRONTEND] Error in build!");
    let { stdout, stderr } = result;
    console.log("[FRONTEND] Full stdout: \n" + stdout.toString("utf-8"));
    console.log("[FRONTEND] Full stderr: \n" + stderr.toString("utf-8"));
    throw new Error("Build unsuccessful");
  }

  let { stdout } = result;

  console.log("[FRONTEND] Build complete");
  console.log("[FRONTEND] stdout: \n" + stdout.toString("utf-8"));
}

async function build_backend() {
  console.log("[BACKEND] building...");

  let result = await $`bun run build`.cwd("league-backend").nothrow().quiet();

  if (result.exitCode != 0) {
    console.log("[BACKEND] Error in build!");
    let { stdout, stderr } = result;
    console.log("[BACKEND] Full stdout: \n" + stdout.toString("utf-8"));
    console.log("[BACKEND] Full stderr: \n" + stderr.toString("utf-8"));
    throw new Error("Build unsuccessful");
  }

  let { stdout } = result;

  console.log("[BACKEND] Build complete");
  console.log("[BACKEND] stdout: \n" + stdout.toString("utf-8"));
}

let promises = [build_frontend(), build_backend()];

Promise.all(promises).catch((err) => {
  console.log("The build was unsuccesful, exiting");
  process.exit(1);
});
