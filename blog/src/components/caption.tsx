export const Caption = (props: { text: string }) => {
  const { text } = props;
  return (
    <div id="caption" className="flex text-2xl">
      <p>
        {text}
      </p>
    </div>
  );
}