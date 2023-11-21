import Accordion from "../components/Accordion";


function AcordionPage() {

  const items = [

    {
      id: '001',
      label: 'Can I use React on a project?',
      content: 'Deserunt ut pariatur anim culpa ipsum magna est. Ipsum aliquip mollit ad excepteur excepteur non in est nulla sint aliqua aute duis. Ad pariatur in ipsum aliquip incididunt consequat ad voluptate labore anim mollit.'
    },

    {
      id: '002',
      label: 'Can I use JavaScript on a project?',
      content: 'Deserunt exercitation officia ut tempor qui nisi laborum duis excepteur. Lorem pariatur consectetur consectetur minim ex sit tempor cillum aute elit. Enim fugiat cupidatat veniam adipisicing pariatur laboris labore.'
    },

    {
      id: '003',
      label: 'Can I use CSS on a project?',
      content: 'Qui cillum excepteur consectetur excepteur aute veniam. Commodo ex cillum ex eu. Mollit velit amet pariatur et qui mollit velit nulla deserunt est adipisicing consequat elit enim. Quis aliqua velit Lorem do. Enim amet tempor consectetur nulla est adipisicing laborum ipsum.'
    }

  ]

  return <Accordion items={items}/>
}

export default AcordionPage;
