import Button from "./Button";
import { useEffect, useState } from "react";

function RecordButton(props) {
  const [shouldRecord, setShouldRecord] = useState(false);

  const mediaRecorder = props.mediaRecorder;

  useEffect(() => {
    if (shouldRecord) {
      mediaRecorder.start();
    } else {
      mediaRecorder.stop();
    }
  }, [shouldRecord]);

  return (
    <Button onChange={() => setShouldRecord(!shouldRecord)}>Record</Button>
  );
}

export default RecordButton;
