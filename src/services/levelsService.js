//20260127 from Copilot

// src/services/levelsService.js
import levelsData from "../data/levels.json";

export function getLevels() {
  return levelsData.levels;
}

export function getLevelById(id) {
  return levelsData.levels.find(level => level.id === id);
}


//when moving .json to /public (as "API"?)

export async function getLevels() {
  const res = await fetch("/levels.json");
  const data = await res.json();
  return data.levels;
}

export async function getLevelById(id) {
  const levels = await getLevels();
  return levels.find(level => level.id === id);
}

//separate API (outside?)

const API_URL = "https://your-api.com/levels";

export async function getLevels() {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.levels;
}

export async function getLevelById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

//UI call: const levels = await getLevels();

//external DB with node.js

import db from "./db.js";

export async function getLevels() {
  return db.collection("levels").find().toArray();
}

export async function getLevelById(id) {
  return db.collection("levels").findOne({ id });
}


//in React component only:
import { getLevels } from "../services/levelsService";

