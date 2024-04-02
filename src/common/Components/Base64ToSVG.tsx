const Base64ToSVG = ({ base64Data }: {base64Data: string}) => {
  // Decode the Base64 data
  const decodedData = atob(base64Data);

  return (
      <svg
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        dangerouslySetInnerHTML={{ __html: decodedData }}
      />
  );
};

export default Base64ToSVG;
