// Generates the three VS Code color themes from palette.json.
// Usage: node scripts/sync-palette.mjs && node scripts/build.mjs
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const palette = JSON.parse(readFileSync(new URL("palette.json", root)));

// Hex with alpha: a(c.jade, 0.2) -> "#4dbf7433".
const a = (hex, alpha) =>
	`${hex}${Math.round(alpha * 255)
		.toString(16)
		.padStart(2, "0")}`;

function workbench(c, dark) {
	// Text drawn on top of a jade fill (buttons, badges).
	const onAccent = dark ? c.crust : c.base;

	return {
		// Base
		focusBorder: c.jade,
		foreground: c.text,
		descriptionForeground: c.subtext,
		disabledForeground: c.overlay0,
		errorForeground: c.garnet,
		"icon.foreground": c.subtext,
		"selection.background": a(c.jade, 0.25),
		"widget.border": c.surface0,
		"widget.shadow": a(c.crust, dark ? 0.6 : 0.2),
		"sash.hoverBorder": c.jade,
		"textLink.foreground": c.jade,
		"textLink.activeForeground": c.mint,
		"textBlockQuote.background": c.mantle,
		"textBlockQuote.border": c.surface1,
		"textCodeBlock.background": c.mantle,
		"textPreformat.foreground": c.carnelian,
		"textSeparator.foreground": c.surface1,

		// Controls
		"button.background": c.jade,
		"button.foreground": onAccent,
		"button.hoverBackground": c.mint,
		"button.secondaryBackground": c.surface1,
		"button.secondaryForeground": c.text,
		"button.secondaryHoverBackground": c.surface2,
		"checkbox.background": c.surface0,
		"checkbox.border": c.surface2,
		"checkbox.foreground": c.text,
		"dropdown.background": c.mantle,
		"dropdown.border": c.surface0,
		"dropdown.foreground": c.text,
		"dropdown.listBackground": c.mantle,
		// Light flavors put fields on base so placeholders stay readable.
		"input.background": dark ? c.mantle : c.base,
		"input.border": c.surface0,
		"input.foreground": c.text,
		"input.placeholderForeground": c.overlay1,
		"inputOption.activeBackground": a(c.jade, 0.2),
		"inputOption.activeBorder": c.jade,
		"inputOption.activeForeground": c.text,
		"inputValidation.errorBackground": c.mantle,
		"inputValidation.errorBorder": c.garnet,
		"inputValidation.warningBackground": c.mantle,
		"inputValidation.warningBorder": c.citrine,
		"inputValidation.infoBackground": c.mantle,
		"inputValidation.infoBorder": c.sapphire,
		"badge.background": c.jade,
		"badge.foreground": onAccent,
		"progressBar.background": c.jade,
		"keybindingLabel.background": c.surface0,
		"keybindingLabel.foreground": c.text,
		"keybindingLabel.border": c.surface1,
		"keybindingLabel.bottomBorder": c.surface2,
		"scrollbar.shadow": a(c.crust, 0.5),
		"scrollbarSlider.background": a(c.surface2, 0.6),
		"scrollbarSlider.hoverBackground": c.surface2,
		"scrollbarSlider.activeBackground": c.overlay0,

		// Lists and trees
		"list.activeSelectionBackground": c.surface1,
		"list.activeSelectionForeground": c.text,
		"list.inactiveSelectionBackground": c.surface0,
		"list.inactiveSelectionForeground": c.text,
		"list.hoverBackground": a(c.surface0, 0.8),
		"list.hoverForeground": c.text,
		"list.focusOutline": c.jade,
		"list.highlightForeground": c.jade,
		"list.dropBackground": c.surface1,
		"list.errorForeground": c.garnet,
		"list.warningForeground": c.citrine,
		"tree.indentGuidesStroke": c.surface1,

		// Activity bar, side bar, title bar
		"activityBar.background": c.crust,
		"activityBar.foreground": c.text,
		"activityBar.inactiveForeground": c.overlay1,
		"activityBar.border": c.crust,
		"activityBar.activeBorder": c.jade,
		"activityBarBadge.background": c.jade,
		"activityBarBadge.foreground": onAccent,
		"sideBar.background": c.mantle,
		"sideBar.foreground": c.subtext,
		"sideBar.border": c.crust,
		"sideBarTitle.foreground": c.subtext,
		"sideBarSectionHeader.background": c.mantle,
		"sideBarSectionHeader.foreground": c.text,
		"sideBarSectionHeader.border": c.surface0,
		"titleBar.activeBackground": c.crust,
		"titleBar.activeForeground": c.subtext,
		"titleBar.inactiveBackground": c.crust,
		"titleBar.inactiveForeground": c.overlay0,
		"titleBar.border": c.crust,
		"commandCenter.background": c.mantle,
		"commandCenter.foreground": c.subtext,
		"commandCenter.border": c.surface0,
		"commandCenter.activeBackground": c.surface0,
		"menu.background": c.mantle,
		"menu.foreground": c.text,
		"menu.selectionBackground": c.surface1,
		"menu.selectionForeground": c.text,
		"menu.separatorBackground": c.surface0,
		"menu.border": c.surface0,

		// Editor groups and tabs
		"editorGroup.border": c.crust,
		"editorGroup.dropBackground": a(c.jade, 0.15),
		"editorGroupHeader.tabsBackground": c.mantle,
		"editorGroupHeader.tabsBorder": c.crust,
		"editorGroupHeader.noTabsBackground": c.base,
		"tab.activeBackground": c.base,
		"tab.activeForeground": c.text,
		"tab.activeBorderTop": c.jade,
		"tab.inactiveBackground": c.mantle,
		"tab.inactiveForeground": dark ? c.overlay1 : c.subtext,
		"tab.unfocusedActiveForeground": c.subtext,
		"tab.unfocusedActiveBorderTop": c.surface2,
		"tab.hoverBackground": c.surface0,
		"tab.border": c.crust,
		"breadcrumb.foreground": c.overlay1,
		"breadcrumb.focusForeground": c.text,
		"breadcrumb.activeSelectionForeground": c.jade,
		"breadcrumbPicker.background": c.mantle,

		// Editor
		"editor.background": c.base,
		"editor.foreground": c.text,
		"editorLineNumber.foreground": c.overlay0,
		"editorLineNumber.activeForeground": c.subtext,
		"editorCursor.foreground": c.jade,
		"editor.lineHighlightBackground": a(c.surface0, 0.5),
		"editor.lineHighlightBorder": "#00000000",
		"editor.selectionBackground": a(c.jade, 0.25),
		"editor.inactiveSelectionBackground": a(c.surface1, 0.6),
		"editor.selectionHighlightBackground": a(c.jade, 0.12),
		"editor.wordHighlightBackground": a(c.surface2, 0.5),
		"editor.wordHighlightStrongBackground": a(c.surface2, 0.8),
		"editor.findMatchBackground": a(c.citrine, 0.3),
		"editor.findMatchBorder": c.citrine,
		"editor.findMatchHighlightBackground": a(c.citrine, 0.15),
		"editor.rangeHighlightBackground": a(c.surface0, 0.6),
		"editor.foldBackground": a(c.surface0, 0.5),
		"editorWhitespace.foreground": c.surface2,
		"editorIndentGuide.background1": c.surface0,
		"editorIndentGuide.activeBackground1": c.surface2,
		"editorRuler.foreground": c.surface0,
		"editorLink.activeForeground": c.jade,
		"editorCodeLens.foreground": c.overlay1,
		"editorInlayHint.background": a(c.surface0, 0.6),
		"editorInlayHint.foreground": c.overlay1,
		"editorBracketMatch.background": a(c.surface2, 0.5),
		"editorBracketMatch.border": c.overlay0,
		"editorBracketHighlight.foreground1": c.jade,
		"editorBracketHighlight.foreground2": c.sapphire,
		"editorBracketHighlight.foreground3": c.amethyst,
		"editorBracketHighlight.foreground4": c.citrine,
		"editorBracketHighlight.foreground5": c.lagoon,
		"editorBracketHighlight.foreground6": c.rhodonite,
		"editorBracketHighlight.unexpectedBracket.foreground": c.garnet,
		"editorError.foreground": c.garnet,
		"editorWarning.foreground": c.citrine,
		"editorInfo.foreground": c.sapphire,
		"editorHint.foreground": c.mint,
		"editorGutter.addedBackground": c.jade,
		"editorGutter.modifiedBackground": c.sapphire,
		"editorGutter.deletedBackground": c.garnet,
		"editorOverviewRuler.border": c.crust,
		"editorOverviewRuler.errorForeground": c.garnet,
		"editorOverviewRuler.warningForeground": c.citrine,
		"editorOverviewRuler.infoForeground": c.sapphire,
		"editorOverviewRuler.addedForeground": c.jade,
		"editorOverviewRuler.modifiedForeground": c.sapphire,
		"editorOverviewRuler.deletedForeground": c.garnet,
		"minimap.selectionHighlight": a(c.jade, 0.4),
		"minimap.findMatchHighlight": a(c.citrine, 0.5),
		"minimapGutter.addedBackground": c.jade,
		"minimapGutter.modifiedBackground": c.sapphire,
		"minimapGutter.deletedBackground": c.garnet,

		// Widgets
		"editorWidget.background": c.mantle,
		"editorWidget.foreground": c.text,
		"editorWidget.border": c.surface0,
		"editorSuggestWidget.background": c.mantle,
		"editorSuggestWidget.border": c.surface0,
		"editorSuggestWidget.foreground": c.text,
		"editorSuggestWidget.selectedBackground": c.surface1,
		"editorSuggestWidget.highlightForeground": c.jade,
		"editorHoverWidget.background": c.mantle,
		"editorHoverWidget.border": c.surface0,
		"peekView.border": c.jade,
		"peekViewEditor.background": c.mantle,
		"peekViewEditor.matchHighlightBackground": a(c.citrine, 0.3),
		"peekViewResult.background": c.crust,
		"peekViewResult.matchHighlightBackground": a(c.citrine, 0.3),
		"peekViewResult.selectionBackground": c.surface1,
		"peekViewTitle.background": c.mantle,
		"peekViewTitleLabel.foreground": c.text,
		"peekViewTitleDescription.foreground": c.subtext,

		// Diff and merge
		"diffEditor.insertedTextBackground": a(c.jade, 0.2),
		"diffEditor.removedTextBackground": a(c.garnet, 0.2),
		"diffEditor.insertedLineBackground": a(c.jade, 0.1),
		"diffEditor.removedLineBackground": a(c.garnet, 0.1),
		"diffEditor.diagonalFill": c.surface1,
		"merge.currentHeaderBackground": a(c.jade, 0.4),
		"merge.currentContentBackground": a(c.jade, 0.15),
		"merge.incomingHeaderBackground": a(c.sapphire, 0.4),
		"merge.incomingContentBackground": a(c.sapphire, 0.15),

		// Panel, terminal, status bar
		"panel.background": c.mantle,
		"panel.border": c.crust,
		"panelTitle.activeForeground": c.text,
		"panelTitle.activeBorder": c.jade,
		"panelTitle.inactiveForeground": c.overlay1,
		"terminal.background": c.mantle,
		"terminal.foreground": c.text,
		"terminalCursor.foreground": c.jade,
		"terminal.selectionBackground": a(c.jade, 0.25),
		...ansi(c),
		"statusBar.background": c.crust,
		"statusBar.foreground": c.subtext,
		"statusBar.border": c.crust,
		"statusBar.noFolderBackground": c.crust,
		"statusBar.debuggingBackground": c.carnelian,
		"statusBar.debuggingForeground": onAccent,
		"statusBarItem.hoverBackground": c.surface0,
		"statusBarItem.remoteBackground": c.jade,
		"statusBarItem.remoteForeground": onAccent,
		"debugToolBar.background": c.mantle,

		// Notifications and quick input
		"notifications.background": c.mantle,
		"notifications.foreground": c.text,
		"notifications.border": c.surface0,
		"notificationLink.foreground": c.jade,
		"notificationsErrorIcon.foreground": c.garnet,
		"notificationsWarningIcon.foreground": c.citrine,
		"notificationsInfoIcon.foreground": c.sapphire,
		"quickInput.background": c.mantle,
		"quickInput.foreground": c.text,
		"quickInputList.focusBackground": c.surface1,
		"pickerGroup.foreground": c.jade,
		"pickerGroup.border": c.surface0,

		// Source control and settings
		"gitDecoration.addedResourceForeground": c.jade,
		"gitDecoration.modifiedResourceForeground": c.sapphire,
		"gitDecoration.deletedResourceForeground": c.garnet,
		"gitDecoration.untrackedResourceForeground": c.mint,
		"gitDecoration.ignoredResourceForeground": c.overlay0,
		"gitDecoration.conflictingResourceForeground": c.carnelian,
		"gitDecoration.submoduleResourceForeground": c.lagoon,
		"settings.headerForeground": c.text,
		"settings.modifiedItemIndicator": c.jade,
		"charts.red": c.garnet,
		"charts.orange": c.carnelian,
		"charts.yellow": c.citrine,
		"charts.green": c.jade,
		"charts.blue": c.sapphire,
		"charts.purple": c.amethyst,
		"charts.foreground": c.text,
		"charts.lines": c.surface2,
	};
}

// Terminal ANSI slots, from the palette's suggested mapping.
function ansi(c) {
	const out = {};
	for (const [slot, role] of Object.entries(palette.ansi)) {
		const name = slot.charAt(0).toUpperCase() + slot.slice(1);
		out[`terminal.ansi${name}`] = c[role];
	}
	return out;
}

// Syntax colors follow the palette's porting guide.
function tokens(c) {
	const t = (name, scope, foreground, fontStyle) => ({
		name,
		scope,
		settings: fontStyle ? { foreground, fontStyle } : { foreground },
	});
	return [
		t("Comments", ["comment", "punctuation.definition.comment"], c.overlay1, "italic"),
		t("Keywords", ["keyword", "storage.type", "storage.modifier", "keyword.control"], c.amethyst),
		t("Operators", ["keyword.operator", "punctuation.accessor"], c.subtext),
		t("Punctuation", ["punctuation", "meta.brace", "meta.delimiter"], c.subtext),
		t("Strings", ["string", "punctuation.definition.string"], c.jade),
		t(
			"Escapes and regex",
			["constant.character.escape", "string.regexp", "punctuation.definition.template-expression"],
			c.rhodonite,
		),
		t(
			"Functions",
			["entity.name.function", "support.function", "meta.function-call.generic", "variable.function"],
			c.sapphire,
		),
		t(
			"Types and classes",
			[
				"entity.name.type",
				"entity.name.class",
				"entity.other.inherited-class",
				"support.type",
				"support.class",
				"storage.type.primitive",
			],
			c.citrine,
		),
		t(
			"Numbers and constants",
			["constant.numeric", "constant.language", "support.constant", "constant.other", "variable.other.enummember"],
			c.carnelian,
		),
		t(
			"Properties and keys",
			[
				"variable.other.property",
				"variable.other.object.property",
				"meta.object-literal.key",
				"support.type.property-name",
				"entity.name.tag.yaml",
			],
			c.lagoon,
		),
		t("Variables", ["variable", "variable.other", "variable.other.readwrite"], c.text),
		t("Parameters", ["variable.parameter"], c.text, "italic"),
		t("This and self", ["variable.language"], c.garnet, "italic"),
		t("Decorators", ["meta.decorator", "entity.name.function.decorator", "punctuation.decorator"], c.rhodonite),
		t("Tags", ["entity.name.tag", "punctuation.definition.tag"], c.sapphire),
		t("Attributes", ["entity.other.attribute-name"], c.mint, "italic"),
		t("CSS selectors", ["entity.other.attribute-name.class.css", "entity.other.attribute-name.id.css"], c.citrine),
		t("Invalid", ["invalid", "invalid.illegal"], c.garnet),
		t("Headings", ["markup.heading", "entity.name.section"], c.jade, "bold"),
		t("Bold", ["markup.bold"], c.text, "bold"),
		t("Italic", ["markup.italic"], c.text, "italic"),
		t("Inline code", ["markup.inline.raw", "markup.fenced_code"], c.carnelian),
		t("Links", ["markup.underline.link", "string.other.link"], c.sapphire),
		t("Quotes", ["markup.quote"], c.overlay1, "italic"),
		t("Inserted", ["markup.inserted"], c.jade),
		t("Deleted", ["markup.deleted"], c.garnet),
		t("Changed", ["markup.changed"], c.sapphire),
	];
}

function semantic(c) {
	return {
		function: c.sapphire,
		method: c.sapphire,
		class: c.citrine,
		interface: c.citrine,
		type: c.citrine,
		typeParameter: { foreground: c.citrine, italic: true },
		enum: c.citrine,
		enumMember: c.carnelian,
		property: c.lagoon,
		parameter: { foreground: c.text, italic: true },
		variable: c.text,
		"variable.defaultLibrary": c.carnelian,
		namespace: c.text,
		decorator: c.rhodonite,
		keyword: c.amethyst,
		string: c.jade,
		number: c.carnelian,
		regexp: c.rhodonite,
		"*.deprecated": { strikethrough: true },
	};
}

mkdirSync(new URL("themes/", root), { recursive: true });
for (const [key, flavor] of Object.entries(palette.flavors)) {
	const c = flavor.colors;
	const theme = {
		$schema: "vscode://schemas/color-theme",
		name: `Nephrite ${flavor.name}`,
		type: flavor.dark ? "dark" : "light",
		semanticHighlighting: true,
		colors: workbench(c, flavor.dark),
		tokenColors: tokens(c),
		semanticTokenColors: semantic(c),
	};
	writeFileSync(
		new URL(`themes/nephrite-${key}-color-theme.json`, root),
		`${JSON.stringify(theme, null, 2)}\n`,
	);
	console.log(`${key}: themes/nephrite-${key}-color-theme.json`);
}
