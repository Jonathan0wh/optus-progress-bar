import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  currentPercentage?: number;
  testID?: string;
}

const ProgressBar = ({ currentPercentage = 0, testID }: ProgressBarProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles['active-progress']}
        style={{
          width: currentPercentage > 100 ? '100%' : currentPercentage + '%',
          backgroundColor: currentPercentage > 100 ? 'red' : 'lightblue',
          transition: ' width 1s',
        }}
      />
      <div className={styles.label} data-testid={testID}>
        {currentPercentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
