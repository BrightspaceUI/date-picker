import '@polymer/polymer/polymer-legacy.js';
import '@brightspace-ui/localize-behavior/d2l-localize-behavior.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.DatePicker = window.D2L.PolymerBehaviors.DatePicker || {};

/** @polymerBehavior D2L.PolymerBehaviors.DatePicker.LocalizeBehavior */
D2L.PolymerBehaviors.DatePicker.LocalizeBehaviorImpl = {
	properties: {
		resources: {
			value: function() {
				return {
					'ar': {
						today: 'اليوم',
						cancel: 'إلغاء'
					},
					'da': {
						today: 'i dag',
						cancel: 'annuller'
					},
					'en': {
						today: 'today',
						cancel: 'cancel'
					},
					'es': {
						today: 'hoy',
						cancel: 'cancelar'
					},
					'fi': {
						today: 'tänään',
						cancel: 'peruuta'
					},
					'fr': {
						today: 'aujourd\'hui',
						cancel: 'Annuler'
					},
					'ja': {
						today: '今日',
						cancel: 'キャンセル'
					},
					'ko': {
						today: '오늘',
						cancel: '취소'
					},
					'nl': {
						today: 'vandaag',
						cancel: 'Annuleer'
					},
					'pt': {
						today: 'hoje',
						cancel: 'cancelar'
					},
					'sv': {
						today: 'i dag',
						cancel: 'annullera'
					},
					'tr': {
						today: 'bugün',
						cancel: 'iptal etmek'
					},
					'zh': {
						today: '今天',
						cancel: '取消'
					},
					'zh-tw': {
						today: '今天',
						cancel: '取消'
					}
				};
			}
		}
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.DatePicker.LocalizeBehavior */
D2L.PolymerBehaviors.DatePicker.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.DatePicker.LocalizeBehaviorImpl
];
