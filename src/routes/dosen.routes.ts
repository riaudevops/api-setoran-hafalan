import express from "express";
import accessTokenValidation from "../middlewares/auth.middlewares";
import { deleteSetoranByID, findMahasiswaByNameOrNim, getInfoDosenByEmail, postSetoran } from "../controllers/dosen.controllers";
import { authorizeRoles } from "../middlewares/protected.middlewares";

const router = express.Router();

router.get("/dosen/info/:email", accessTokenValidation, authorizeRoles("dosen-pa"), getInfoDosenByEmail);
router.get("/dosen/mahasiswa", accessTokenValidation, authorizeRoles("dosen-pa"), findMahasiswaByNameOrNim);
router.post("/dosen/mahasiswa/setoran", accessTokenValidation, authorizeRoles("dosen-pa"), postSetoran);
router.delete("/dosen/mahasiswa/setoran/:id_setoran", accessTokenValidation, authorizeRoles("dosen-pa"), deleteSetoranByID);

export default router;

