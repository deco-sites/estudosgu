import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  image: ImageWidget;
  alt: string;
}

export default function LongBanner({ image, alt }: Props) {
  return (
    <div>
      <Image src={image} alt={alt} width={1143} height={256} loading="lazy" />
    </div>
  );
}
