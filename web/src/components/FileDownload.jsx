import React, { useState } from "react";
import { Button } from 'antd'

const openLink = (url) => {
  window.ReactNativeWebView &&
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ method: "openLink", url })
    );
};

export const FileDownload = () => {
  return (
    <div>
      <label>Download PDF</label>
      <br />
      <a
        href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        target="_blank"
        download
      >
        Download - I'm just &lt;a&gt; link
      </a>
      <br />
      <Button
        onClick={() =>
          openLink(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          )
        }
      >
        Download - with Native Intent
      </Button>
    </div>
  );
};
