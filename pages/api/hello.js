// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { tmpdir } from 'os';
import path from 'path';
const pdfPath = path.join(tmpdir(), `${222}.pdf`);

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe', pdfPath });
};
