'use client';

import {useFormState} from 'react-dom';
import * as actions from '@/actions';


export default function SnippetCreatePage() {  
      const [formState, action] = useFormState(actions.createSnippet, { message: ''});
       

    return (
        <form action= {action}>
            <h3 className="font-bold m-3">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className='w-12' htmlFor="title">Title</label>
                    <input className="border p-2 w-full" id="title" name="title"/>
                </div>
                <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className='w-12' htmlFor="code">Code</label>
                    <textarea className="border p-2 w-full" id="code" name="code"/>
                </div>

                {
                   formState.message ?  <div className='my-2 bg-red-200 borer rounded border-red-600'>{formState.message}</div> : null
                }

            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">Create Snippet</button>
            </div>
        </form>
            

    );
}
