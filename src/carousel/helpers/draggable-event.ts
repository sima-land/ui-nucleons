import { IPoint } from '../../helpers/point';

interface Data {
  offset: IPoint;
  client: IPoint;
}

/**
 * Нестандартное событие перетаскивания.
 */
export default class DraggableEvent implements Data {
  prevented: boolean;
  offset: IPoint;
  client: IPoint;

  /**
   * Конструктор.
   * @param props Свойства.
   * @param props.offset Смещение контента.
   * @param props.client Клиентская позиция.
   */
  constructor(props: Data) {
    this.prevented = false;
    this.offset = props.offset;
    this.client = props.client;
  }

  /**
   * Помечает событие как отмененное.
   */
  preventDefault() {
    this.prevented = true;
  }
}
