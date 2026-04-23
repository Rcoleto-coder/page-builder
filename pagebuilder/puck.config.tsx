import { DropZone, type Config } from "@puckeditor/core";

type Props = {
  HeadingBlock: { title: string };
  GridBlock: {};
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    GridBlock: {
      render: () => {
        return <DropZone zone="grid" style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr"}} />
      }
    },
  },
};

export default config;
