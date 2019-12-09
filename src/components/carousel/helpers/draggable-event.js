/**
 * Нестандартное событие перетаскивания.
 */
export default class DraggableEvent {
  /**
   * Конструктор.
   * @param {Object} props Свойства.
   * @param {import('../../helpers/point').Point} props.offset Смещение контента.
   * @param {import('../../helpers/point').Point} props.client Клиентская позиция.
   */
  constructor (props) {
    this.prevented = false;
    this.offset = props.offset;
    this.client = props.client;
  }

  /**
   * Помечает событие как отмененное.
   */
  preventDefault () {
    this.prevented = true;
  }
}
