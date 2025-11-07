import { Router, Request, Response } from "express";
import * as studentService from "../services/studentService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const students = await studentService.getAllStudents();
  res.json(students);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const student = await studentService.getStudentById(id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

router.post("/", async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });
  const newStudent = await studentService.addStudent(name);
  res.status(201).json(newStudent);
});

export default router;