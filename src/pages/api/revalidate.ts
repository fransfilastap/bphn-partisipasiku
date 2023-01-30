import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  revalidated: boolean;
  message: string;
}

const HEADER_SIGNATURE = 'isr_secret';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { model, id, slug } = req.query;

  if (!req.headers[HEADER_SIGNATURE]) {
    return res.status(401).json({
      message: 'invalid secret',
      revalidated: false,
    });
  }

  if (req.headers[HEADER_SIGNATURE] === process.env.NEXT_REVALIDATE_SECRET) {
    await res.revalidate('/');

    if (model === 'topic') {
      await res.revalidate('/topik');
      await res.revalidate(`/topik/${slug}`);
    }

    if (model === 'issue') {
      await res.revalidate('/isu');
      await res.revalidate(`/isu/${slug}`);
    }

    return res.status(200).json({
      message: 'ok',
      revalidated: true,
    });
  }
}
