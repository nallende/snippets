import {notFound} from 'next/navigation';
import Link from 'next/link';
import {db} from '@/db'

interface SnippetShowPageProps {
    params: {
        id: string
}
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {

    await new Promise((r) => setTimeout(r, 3000));

    const snippet = await db.snippet.findFirst({

        where: {id: parseInt(props.params.id)}

    });

    if(!snippet){
        return notFound();
    }

    return(
     <div>
        <h1 className='text-xl font-bold'>{snippet.title}</h1>
        <div className='flex gap-4'>
        <Link href = {`/snippets/${snippet.id}/edit`} className='p-2 border rounded'>Edit</Link>
        <button className='p-2 border rounded'>Delete</button>

        </div>
        <pre className='p-3 border rounded bg-gray-200'>{snippet.code}</pre>
        
        </div>
    )

};