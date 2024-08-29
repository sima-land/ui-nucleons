import { COLORS } from '@sima-land/ui-nucleons/colors';
import { CardGrid, ImportField, TokenCard } from '../gradients/usage';
import styles from './usage.m.scss';

export function ColorsPicker() {
  return (
    <>
      <h2>Цвета</h2>

      <p>Библиотека предоставляет утилиты для использования цветов дизайн-системы.</p>

      <div className={styles.imports}>
        <ImportField label='Импорт SCSS' value="@use 'pkg:@sima-land/ui-nucleons/colors';" />
        <ImportField
          label='Импорт JS'
          value="import { COLORS } from '@sima-land/ui-nucleons/colors';"
        />
      </div>

      <CardGrid>
        {[...COLORS.entries()].map(([name, value], index) => (
          <TokenCard
            key={index}
            name={name}
            value={value}
            usageToken={`color/${name}`}
            usageScss={`colors.$${name}`}
            usageJs={`COLORS.get('${name}')`}
          />
        ))}
      </CardGrid>
    </>
  );
}
