import CodeMirror from 'codemirror'
import 'codemirror/addon/runmode/runmode'
import 'codemirror/mode/meta'
import 'codemirror/mode/javascript/javascript'
import Highlighter from 'react-codemirror-runmode'
import React from 'react'
// Basado en https://github.com/craftzdog/react-codemirror-runmode
const Highlight = ({code}) => {
  return (
    <Highlighter
    codeMirror={CodeMirror}
    theme='material'
    value={code}
    language='javascript'
  />
  )
}

export default Highlight
