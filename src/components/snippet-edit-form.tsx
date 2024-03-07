'use client'

import type {Snippet} from '@prisma/client';
import Editor from '@monaco-editor/react';
import {useState } from 'react';
import * as actions from '@/actions';


interface SnippetEditFormProps{
    snippet: Snippet

}

export default  function SnippetEditForm ({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState<string>(snippet.code);
    const handleEditorChange = (value: string = "") => {
        setCode(value);
        console.log(value); 
    };

    

return (
    <div>
               
        <Editor 
            height="40vh"
            defaultLanguage="javascript"
            defaultValue={snippet.code}
            theme="vs-dark"
            options = {{minimap: {enabled: false}}}
            onChange={handleEditorChange}   
        />

    </div>
)
    }
