import { Text, ALIGNS } from '@sima-land/ui-nucleons/text';

export const meta = {
  category: 'Устаревшее/Text',
  title: 'Варианты выравнивания',
};

export default function AlignVariants() {
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
