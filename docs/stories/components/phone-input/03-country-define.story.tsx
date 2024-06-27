import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';

export const meta = {
  category: 'Компоненты/PhoneInput',
  title: 'Пример: определение маски',
};

export default function DefineCountryMask() {
  return (
    <>
      <article>
        <h3>Пустое значение - «Россия» по умолчанию</h3>
        <PhoneInput defaultValue='' />
      </article>

      <article>
        <h3>Армения</h3>
        <PhoneInput defaultValue='37422333444' />
      </article>

      <article>
        <h3>Грузия</h3>
        <PhoneInput defaultValue='995111222333' />
      </article>

      <article>
        <h3>Узбекистан</h3>
        <PhoneInput defaultValue='998556667777' />
      </article>

      <article>
        <h3>Неизвестный номер - «Другое»</h3>
        <PhoneInput defaultValue='1234567890' />
      </article>

      <article>
        <h3>Россия</h3>
        <PhoneInput defaultValue='78005553535' />
      </article>

      <article>
        <h3>Казахстан</h3>
        <PhoneInput defaultValue='76501977200' />
      </article>
    </>
  );
}
