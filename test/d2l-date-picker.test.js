import '../d2l-date-picker.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';

describe('d2l-date-picker', () => {

	let elem;
	beforeEach(async() => {
		elem = await fixture(html`<d2l-date-picker label="basic"></d2l-date-picker>`);
	});

	describe('basic', () => {
		it('should instantiate the element', () => {
			expect(elem.is).to.equal('d2l-date-picker');
		});
	});

	describe('value', () => {

		describe('value tests', () => {

			it('should default value to empty', () => {
				expect(elem.value).to.be.empty;
				expect(elem.hasAttribute('value')).to.be.true;
				expect(elem.$$('input').value).to.be.empty;
			});

			it('should set property when setting attribute', () => {
				elem.setAttribute('value', '2017-07-01');
				expect(elem.value).to.equal('2017-07-01');
			});

			it('should set attribute when setting value', () => {
				elem.value = '2017-07-01';
				expect(elem.getAttribute('value')).to.equal('2017-07-01');
			});

			it('should set input when element value set', (done) => {
				elem.value = '2017-06-01';
				afterNextRender(elem.$$('input'), () => {
					expect(elem.$$('input').value).to.equal('6/1/2017');
					done();
				});
			});

			it('should set vaadin picker when element value set', () => {
				elem.value = '2017-06-01';
				expect(elem.$$('vaadin-date-picker-light').value).to.equal('2017-06-01');
			});

			it('should set element value when vaadin picker value set', () => {
				elem.$$('vaadin-date-picker-light').value = '2017-07-01';
				expect(elem.value).to.equal('2017-07-01');
			});

		});

		describe('value-change-event', () => {

			it('should fire d2l-date-picker-value-changed event when vaadin element is changed', async() => {
				const input = elem.$$('vaadin-date-picker-light');
				setTimeout(() => input.value = '2017-07-01');
				const e = await oneEvent(elem, 'd2l-date-picker-value-changed');
				expect(e.target).to.equal(elem);
				expect(e.detail.value).to.equal('2017-07-01');
			});

			it('should fire d2l-date-picker-value-changed event when element is changed', async() => {
				setTimeout(() => elem.value = '2017-07-01');
				const e = await oneEvent(elem, 'd2l-date-picker-value-changed');
				expect(e.target).to.equal(elem);
				expect(e.detail.value).to.equal('2017-07-01');
			});

		});

	});

	describe('focus management', () => {

		it('should fire focus event when custom element is focused', async() => {
			setTimeout(() => elem.focus());
			const e = await oneEvent(elem, 'focus');
			expect(e.target).to.equal(elem);
		});

		it('should fire focus event when input element is focused', async() => {
			const input = elem.$$('input');
			setTimeout(() => input.focus());
			const e = await oneEvent(elem, 'focus');
			expect(e.target).to.equal(elem);
		});

	});

});
