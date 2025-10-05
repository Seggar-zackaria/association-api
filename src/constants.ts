import fs from 'fs';
import path from 'path';

export const UPLOAD_DIR = path.join('public', 'uploads', "temp");
export const PICTURES_DIR = path.join(UPLOAD_DIR, 'pictures');
export const MEDICAL_DOCS_DIR = path.join(UPLOAD_DIR, 'medical');
export const ATTESTATION_DOCS_DIR = path.join(UPLOAD_DIR, 'attestation');

[UPLOAD_DIR, PICTURES_DIR, MEDICAL_DOCS_DIR, ATTESTATION_DOCS_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});
