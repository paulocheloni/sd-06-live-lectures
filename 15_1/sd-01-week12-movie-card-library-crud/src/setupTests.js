import MutationObserver from '@sheerun/mutationobserver-shim';

window.MutationObserver = MutationObserver;
jest.setTimeout(30000);
