export const execFn = file_name => {
  return `mkdir "${file_name}"

  # Changing directory to the newly created folder
  cd "${file_name}"

  # Creating the necessary files within the folder
  touch "${file_name}.module.css"
  touch "index.ts"

  # Writing export statement to index.ts
  echo "export * from './${file_name}.tsx';" > index.ts

  # Echoing multi-line text into [file_name].tsx
  cat <<- EOF > "${file_name}.tsx"
import classNames from "classnames";

export interface ${file_name}Props {
  className?: string;
}

export const ${file_name} = ({ className='', ...props }: ${file_name}Props) => {
  return (
    <div className={classNames('', className)} {...props}></div>
  )
}
EOF

  # Echoing multi-line text into [file_name].stories.tsx
  cat <<- EOF > "${file_name}.stories.tsx"
import { Story, Meta } from "@storybook/react/types-6-0";
import { ${file_name}, ${file_name}Props } from "./${file_name}";

export default {
  title: "",
  component: ${file_name}
} as Meta;

const Template: Story<${file_name}Props> = args => <${file_name} {...args} />;

export const ${file_name}Template = Template.bind({});
EOF

  # Providing feedback to the user
  echo "Files and folder created successfully!"`;
};
