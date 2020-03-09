import React, { useState } from "react";
import { Remarkable } from "remarkable";
import { Paper } from "@material-ui/core";

const MdPreviewer = () => {
  var [input, setInput] = useState(`
# my dog is

## Not my dog

[But a cog]()
\`Maybe.\`

\`\`\`
And twice the ferociousness
\`\`\`

- Of a squirrel

> You see...

![Friendly squirrel](https://www.pbs.org/wgbh/nova/media/images/iStock-473012660.width-1500.jpg)

**That's very ferocious!**
  `);

  return (
    <div className="md-previewer">
      <textarea
        name="text"
        id="editor"
        cols="30"
        rows="10"
        onChange={e => {
          setInput(e.target.value);
        }}
        value={input}
      ></textarea>

      <Paper
        id="preview"
        variant="outlined"
        dangerouslySetInnerHTML={(function markdownToHTML() {
          var md = new Remarkable();
          return { __html: md.render(input) };
        })()}
      />
    </div>
  );
};

export default MdPreviewer;
