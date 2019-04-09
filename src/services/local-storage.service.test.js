import { LocalStorageService } from "./local-storage.service";

const val = 'value1';
const key = 'key1';

it('setItem and getItem', async () => {
    const srv = new LocalStorageService();
    await srv.setItem(key, val);
    const newVal = await srv.getItem(key);
    expect(newVal).toEqual(val);
});

it('removeItem', async () => {
    const srv = new LocalStorageService();
    await srv.setItem(key, val);
    await srv.removeItem(key);
    const newVal = await srv.getItem(key);
    expect(newVal).toBeNull();
});


it('clear', async () => {
    const srv = new LocalStorageService();
    await srv.setItem(key, val);
    await srv.clear();
    const newVal = await srv.getItem(key);
    expect(newVal).toBeNull();
});


