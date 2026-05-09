import { Slot, type Config } from "@puckeditor/core";

type Props = {
  HeadingBlock: { title: string };
  GridBlock: {children: Slot};
  CardBlock: {
    title: string
    description: string
    padding: number
  }
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
        <div>
          <h1>{title}</h1>
        </div>
      ),
    },
    GridBlock: {
      fields: {
        children: { type: "slot" }
      },
      defaultProps: {
        children: [],
      },
      render: ({children: Children}) => {
        return <Children />
      }
    },
    CardBlock: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea"},
        padding: { type: "number"}
      },
      defaultProps: {
        title: "Card title",
        description: "This is a description...",
        padding: 16
      },
      render: ({title, description, padding: padding}) => {
        return <div style={{padding}}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      }
    },
  },
};

export default config;
