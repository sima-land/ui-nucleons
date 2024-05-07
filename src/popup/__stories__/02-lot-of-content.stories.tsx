import { PopupView } from '@sima-land/ui-nucleons/popup';

export default {
  title: 'common/Popup',
  component: PopupView,
  parameters: {
    layout: 'padded',
  },
};

export function LotOfContent() {
  return (
    <>
      <PopupView onClose={() => alert('Нажат крестик!')}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci quos eos tempora
            repellendus rerum tempore temporibus perferendis alias officia, consectetur asperiores
            nulla fuga, at animi? Labore dolorem ratione tempora.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci quos eos tempora
            repellendus rerum tempore temporibus perferendis alias officia, consectetur asperiores
            nulla fuga, at animi? Labore dolorem ratione tempora.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci quos eos tempora
            repellendus rerum tempore temporibus perferendis alias officia, consectetur asperiores
            nulla fuga, at animi? Labore dolorem ratione tempora.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci quos eos tempora
            repellendus rerum tempore temporibus perferendis alias officia, consectetur asperiores
            nulla fuga, at animi? Labore dolorem ratione tempora.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci quos eos tempora
            repellendus rerum tempore temporibus perferendis alias officia, consectetur asperiores
            nulla fuga, at animi? Labore dolorem ratione tempora.
          </div>
        </div>
      </PopupView>
    </>
  );
}

LotOfContent.storyName = 'Много текста';
