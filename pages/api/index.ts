import { NextApiRequest, NextApiResponse } from 'next'

const routes: string[] = [ '/api/hello', '/api/users' ]

interface DataResponse {
  msg: string;
  routes: string[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<DataResponse>) {
  res.status(200).json({
    msg: 'Welcome to my API, please visit the following routes availible',
    routes,
  })
}