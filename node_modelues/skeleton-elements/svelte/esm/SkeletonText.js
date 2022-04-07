/* SkeletonText.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	assign,
	check_outros,
	create_slot,
	detach,
	element,
	empty,
	exclude_internal_props,
	get_spread_update,
	group_outros,
	init,
	insert,
	safe_not_equal,
	set_attributes,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

function create_else_block(ctx) {
	let span;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let span_levels = [/*rest*/ ctx[1], { class: /*skeletonClassName*/ ctx[2] }];
	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = assign(span_data, span_levels[i]);
	}

	return {
		c() {
			span = element("span");
			if (default_slot) default_slot.c();
			set_attributes(span, span_data);
		},
		m(target, anchor) {
			insert(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], !current ? -1 : dirty, null, null);
				}
			}

			set_attributes(span, span_data = get_spread_update(span_levels, [
				dirty & /*rest*/ 2 && /*rest*/ ctx[1],
				(!current || dirty & /*skeletonClassName*/ 4) && { class: /*skeletonClassName*/ ctx[2] }
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (13:23) 
function create_if_block_6(ctx) {
	let h5;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let h5_levels = [/*rest*/ ctx[1], { class: /*skeletonClassName*/ ctx[2] }];
	let h5_data = {};

	for (let i = 0; i < h5_levels.length; i += 1) {
		h5_data = assign(h5_data, h5_levels[i]);
	}

	return {
		c() {
			h5 = element("h5");
			if (default_slot) default_slot.c();
			set_attributes(h5, h5_data);
		},
		m(target, anchor) {
			insert(target, h5, anchor);

			if (default_slot) {
				default_slot.m(h5, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], !current ? -1 : dirty, null, null);
				}
			}

			set_attributes(h5, h5_data = get_spread_update(h5_levels, [
				dirty & /*rest*/ 2 && /*rest*/ ctx[1],
				(!current || dirty & /*skeletonClassName*/ 4) && { class: /*skeletonClassName*/ ctx[2] }
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h5);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (11:23) 
function create_if_block_5(ctx) {
	let h4;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let h4_levels = [/*rest*/ ctx[1], { class: /*skeletonClassName*/ ctx[2] }];
	let h4_data = {};

	for (let i = 0; i < h4_levels.length; i += 1) {
		h4_data = assign(h4_data, h4_levels[i]);
	}

	return {
		c() {
			h4 = element("h4");
			if (default_slot) default_slot.c();
			set_attributes(h4, h4_data);
		},
		m(target, anchor) {
			insert(target, h4, anchor);

			if (default_slot) {
				default_slot.m(h4, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], !current ? -1 : dirty, null, null);
				}
			}

			set_attributes(h4, h4_data = get_spread_update(h4_levels, [
				dirty & /*rest*/ 2 && /*rest*/ ctx[1],
				(!current || dirty & /*skeletonClassName*/ 4) && { class: /*skeletonClassName*/ ctx[2] }
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h4);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (9:23) 
function create_if_block_4(ctx) {
	let h3;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let h3_levels = [/*rest*/ ctx[1], { class: /*skeletonClassName*/ ctx[2] }];
	let h3_data = {};

	for (let i = 0; i < h3_levels.length; i += 1) {
		h3_data = assign(h3_data, h3_levels[i]);
	}

	return {
		c() {
			h3 = element("h3");
			if (default_slot) default_slot.c();
			set_attributes(h3, h3_data);
		},
		m(target, anchor) {
			insert(target, h3, anchor);

			if (default_slot) {
				default_slot.m(h3, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], !current ? -1 : dirty, null, null);
				}
			}

			set_attributes(h3, h3_data = get_spread_update(h3_levels, [
				dirty & /*rest*/ 2 && /*rest*/ ctx[1],
				(!current || dirty & /*skeletonClassName*/ 4) && { class: /*skeletonClassName*/ ctx[2] }
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h3);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (7:23) 
function create_if_block_3(ctx) {
	let h2;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let h2_levels = [/*rest*/ ctx[1], { class: /*skeletonClassName*/ ctx[2] }];
	let h2_data = {};

	for (let i = 0; i < h2_levels.length; i += 1) {
		h2_data = assign(h2_data, h2_levels[i]);
	}

	return {
		c() {
			h2 = element("h2");
			if (default_slot) default_slot.c();
			set_attributes(h2, h2_data);
		},
		m(target, anchor) {
			insert(target, h2, anchor);

			if (default_slot) {
				default_slot.m(h2, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], !current ? -1 : dirty, null, null);
				}
			}

			set_attributes(h2, h2_data = get_spread_update(h2_levels, [
				dirty & /*rest*/ 2 && /*rest*/ ctx[1],
				(!current || dirty & /*skeletonClassName*/ 4) && { class: /*skeletonClassName*/ ctx[2] }
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h2);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (5:23) 
function create_if_block_2(ctx) {
	let h1;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let h1_levels = [/*rest*/ ctx[1], { class: /*skeletonClassName*/ ctx[2] }];
	let h1_data = {};

	for (let i = 0; i < h1_levels.length; i += 1) {
		h1_data = assign(h1_data, h1_levels[i]);
	}

	return {
		c() {
			h1 = element("h1");
			if (default_slot) default_slot.c();
			set_attributes(h1, h1_data);
		},
		m(target, anchor) {
			insert(target, h1, anchor);

			if (default_slot) {
				default_slot.m(h1, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], !current ? -1 : dirty, null, null);
				}
			}

			set_attributes(h1, h1_data = get_spread_update(h1_levels, [
				dirty & /*rest*/ 2 && /*rest*/ ctx[1],
				(!current || dirty & /*skeletonClassName*/ 4) && { class: /*skeletonClassName*/ ctx[2] }
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h1);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (3:22) 
function create_if_block_1(ctx) {
	let p;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let p_levels = [/*rest*/ ctx[1], { class: /*skeletonClassName*/ ctx[2] }];
	let p_data = {};

	for (let i = 0; i < p_levels.length; i += 1) {
		p_data = assign(p_data, p_levels[i]);
	}

	return {
		c() {
			p = element("p");
			if (default_slot) default_slot.c();
			set_attributes(p, p_data);
		},
		m(target, anchor) {
			insert(target, p, anchor);

			if (default_slot) {
				default_slot.m(p, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], !current ? -1 : dirty, null, null);
				}
			}

			set_attributes(p, p_data = get_spread_update(p_levels, [
				dirty & /*rest*/ 2 && /*rest*/ ctx[1],
				(!current || dirty & /*skeletonClassName*/ 4) && { class: /*skeletonClassName*/ ctx[2] }
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(p);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (1:0) {#if tag === 'div'}
function create_if_block(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let div_levels = [/*rest*/ ctx[1], { class: /*skeletonClassName*/ ctx[2] }];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], !current ? -1 : dirty, null, null);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				dirty & /*rest*/ 2 && /*rest*/ ctx[1],
				(!current || dirty & /*skeletonClassName*/ 4) && { class: /*skeletonClassName*/ ctx[2] }
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;

	const if_block_creators = [
		create_if_block,
		create_if_block_1,
		create_if_block_2,
		create_if_block_3,
		create_if_block_4,
		create_if_block_5,
		create_if_block_6,
		create_else_block
	];

	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*tag*/ ctx[0] === "div") return 0;
		if (/*tag*/ ctx[0] === "p") return 1;
		if (/*tag*/ ctx[0] === "h1") return 2;
		if (/*tag*/ ctx[0] === "h2") return 3;
		if (/*tag*/ ctx[0] === "h3") return 4;
		if (/*tag*/ ctx[0] === "h4") return 5;
		if (/*tag*/ ctx[0] === "h5") return 6;
		return 7;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let skeletonClassName;
	let { $$slots: slots = {}, $$scope } = $$props;
	let { tag = "span" } = $$props;
	let { effect = undefined } = $$props;
	let { class: className = undefined } = $$props;
	const rest = {};

	$$self.$$set = $$new_props => {
		$$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("tag" in $$new_props) $$invalidate(0, tag = $$new_props.tag);
		if ("effect" in $$new_props) $$invalidate(3, effect = $$new_props.effect);
		if ("class" in $$new_props) $$invalidate(4, className = $$new_props.class);
		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: Object.keys($$props).forEach(prop => {
			if (prop !== "tag" && prop !== "effect" && prop !== "class") {
				$$invalidate(1, rest[prop] = $$props[prop], rest);
			}
		});

		if ($$self.$$.dirty & /*effect, className*/ 24) {
			$: $$invalidate(2, skeletonClassName = ["skeleton-text", effect && `skeleton-effect-${effect}`, className].filter(c => !!c).join(" "));
		}
	};

	$$props = exclude_internal_props($$props);
	return [tag, rest, skeletonClassName, effect, className, $$scope, slots];
}

class SkeletonText extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { tag: 0, effect: 3, class: 4 });
	}
}

export default SkeletonText;