const express = require("express");
const router = express.Router();

const {checkFile,convertFile,makeDir,saveImg,saveFile,getFilename,convertToUSDZ,getGLTF,saveUSDZ,getUSDZ,delfiles,saveGLB} = require("../controllers/files");


//save 3D file
router.post("/file/checkFile",checkFile);
router.post("/file/convertFile",convertFile);
router.post("/file/makeDir",makeDir);
router.post("/file/fileImg",saveImg);
// router.get("/file/saveglb",saveGLB);
router.get("/file/saveusdz",saveUSDZ);
router.get("/file/saveFile",saveFile);
router.get("/file/convertToUSDZ",convertToUSDZ);
router.get("/file/filename",getFilename);
router.get("/file/getGLTF",getGLTF);
router.get("/file/getUSDZ",getUSDZ);
router.get("/file/saveGLB",saveGLB);
router.get("/file/delfiles",delfiles);
module.exports = router;