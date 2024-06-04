import { Text, ALIGNS } from '@sima-land/ui-nucleons/text';

export default {
  title: 'deprecated/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
};

export function AlignVariants() {
  return (
    <>
      {[...ALIGNS].map((align, index) => (
        <div key={index} style={{ maxWidth: 320 }}>
          <h3>Text with align {align}</h3>
          <Text element='div' size={16} align={align}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex eos aliquid
            iusto nam recusandae iure saepe pariatur harum sed.
          </Text>
        </div>
      ))}
    </>
  );
}

AlignVariants.storyName = 'Варианты выравнивания';
