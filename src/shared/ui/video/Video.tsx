interface VideoProps {
  src: string;
  type: string;
  width?: number;
  height?: number;
}

export const Video = ({ src, type, width, height }: VideoProps) => {
  return (
    <video width={width} height={height} controls>
      <source src={src} type={type} />
      Your browser does not support the video format. Please try a different
      browser.
    </video>
  );
};
