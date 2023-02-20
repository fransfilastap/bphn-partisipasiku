import logo from '~/logo_partisipasiku.png';
export default function OgTailwind({
  caption,
  category = '',
}: {
  caption: string | null;
  category: string | null;
}) {
  return (
    <div
      tw='w-screen h-screen flex flex-col p-10'
      style={{
        backgroundImage:
          'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      }}
    >
      <div tw='flex flex-col justify-between items-start h-full w-full border rounded-t-xl p-10 border-white'>
        <div tw="flex flex-col ">
          <p tw='text-white max-w-max border border-white p-3 rounded-full text-lg'>
            {category}
          </p>
          <h5 tw='text-[5rem] text-white leading-tighter tracking-tighter capitalize'>
            {caption}.
          </h5>
        </div>
        <div tw='w-full flex flex-row justify-between items-center'>
          <h5 tw='text-right text-white max-w-max'>https://bphn.go.id</h5>
        </div>
      </div>
    </div>
  );
}
