import { ToTwelveHourTimePipe } from './to-twelve-hour-time.pipe';

describe('ToTwelveHourTimePipe', () => {
  it('create an instance', () => {
    const pipe = new ToTwelveHourTimePipe();
    expect(pipe).toBeTruthy();
  });
});
