import logo from '~/logo_partisipasiku.png';
export default function OgTailwind({ caption }: { caption: string | null }) {
  return (
    <div
      tw='w-screen h-screen flex flex-col p-10'
      style={{
        backgroundImage:
          'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      }}
    >
      <div tw='flex flex-col justify-between items-start h-full w-full border rounded-t-lg p-10 border-white'>
        <h5 tw='text-7xl text-white leading-tighter tracking-tighter capitalize'>
          {caption}.
        </h5>
        <div tw='w-full flex flex-row justify-between items-center'>
          <h5 tw='text-white max-w-max'>Partisipasiku.</h5>
          <h5 tw='text-right text-white max-w-max'>BPHN KEMENKUMHAM</h5>
        </div>
      </div>
    </div>
  );
}
