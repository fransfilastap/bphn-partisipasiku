import { AppInfo } from '@/configs';
import { FunctionComponent } from 'react';

const OgImageV1: FunctionComponent<{ caption: string | null }> = ({
  caption,
}) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundImage: `url(${AppInfo.url}/og-bg.jpg)`,
      }}
    >
      <div
        style={{
          marginLeft: 190,
          marginRight: 190,
          display: 'flex',
          fontSize: 130,
          fontFamily: 'Kaisei Tokumin',
          letterSpacing: '-0.05em',
          fontStyle: 'normal',
          color: 'white',
          lineHeight: '120px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {caption}
      </div>
    </div>
  );
};

export default OgImageV1;
