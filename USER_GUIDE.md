# PrintSketch user guide

**Version 1.21.2.** Tap **?** in the app to see which version you have.

## Installing PrintSketch

Install PrintSketch from **https://rnclock.github.io/My\_Own\_App/** and it runs like a normal app, with no internet needed after the first visit.

**On the Galaxy Tab S11 Ultra**

1. Open **Chrome** and go to the address above.
2. Tap the **⋮** menu, then **Add to home screen** → **Install**.
3. Open PrintSketch from its new home-screen icon. It opens full screen, without the browser bar.

**On your Windows PC**

1. Open the same address in **Chrome** or **Edge**.
2. Click the **install icon** at the right end of the address bar (a small screen with an arrow), or use the **⋮** menu → **Install PrintSketch**.
3. It appears in the Start menu like any other program.

**Working offline**

- Open the installed app once while you're online. That stores the app and its fonts on the device.
- After that it works with no connection. Drawing, 3D, saving and projects all run on the device itself.
- When you're online, it checks for a newer version on its own. Close and reopen it to get updates.

**Good to know**

- Your work is kept separately on each device. To move a design between the tablet and the PC, use **Project → Save project** and open that file on the other device.
- The installed app saves **.3mf** and **.stl** files directly. The older claude.ai link still works, but it saves a .zip you have to unzip.

## The screen at a glance

The screen has four areas: the top bar, the toolbar on the left, the view in the middle, and the settings panel on the right.

| Area | What's there |
| --- | --- |
| Top bar | **Plate** and **Object** pickers, the **2D / 3D** switch, **Draw** and **Inlay** tabs, then the trash can, **Project** (save, open, new) and **?** (quick help) |
| Toolbar (left) | Pen, Lines, Rect, Circle, Select, Text, Photo, Import, Multi, then Fit and Undo at the bottom |
| View (middle) | The build plate. In 3D, the **Top**, **Front**, **Side** and **Bottom** camera buttons are at top right |
| Panel (right) | Settings for whatever is selected, or tips when nothing is. Sections fold: tap a header to open it; the one you opened stays open as you switch objects. Drag the thin bar on its left edge to make it wider or narrower (double-click the bar to reset), or tap **›** at the top of the bar to hide it and give the view the full width (**‹** brings it back) |

**Moving around the view**

- **S Pen** draws. **One finger** moves the view. **Two fingers** pinch to zoom.
- With a mouse: left button draws, right button or the wheel moves and zooms.
- In 3D, drag empty space to turn the view.
- **Fit** brings everything back into view. **Undo** (or Ctrl+Z) steps back.

**More controls**

- **Trash can** (top bar, left of **Project**): deletes whatever is selected, including a whole selection or group. Greyed out when nothing is selected. Undo brings it back.
- **Turning all the way round:** in 3D, keep dragging up or down and the view goes underneath and keeps going.
- **Top, Front, Side, Bottom:** quick camera buttons under the 2D/3D switch. **Bottom** is the fastest way to check the underside.

## Drawing shapes

Pick a tool on the left and draw on the grid. Every outline closes itself, and each square of the grid is 10 mm.

| Tool | How to use it |
| --- | --- |
| **Pen** | Draw any outline with the S Pen. Smoothing cleans it up; adjust it with the **Smoothing** slider. |
| **Lines** | Tap each corner. Tap the orange first dot (or **Finish shape**) to close it. |
| **Rect** | Drag from one corner to the opposite corner. |
| **Circle** | Drag from the center outward. |
| **Text** | Type text, pick a font (see **Fonts** below), bold or italic, letter height and thickness. The letters come out as a group. |
| **Photo** | Pick a photo of a sketch or logo. Use **Darkness cut-off** and **Traced width** to tune the outline. |

- New shapes use the **Height for new shapes** shown when nothing is selected.
- Shapes that **overlap** join into one part when you save. A blue outline shows what's joined.
- Tap a shape to select it. Tap the same spot again to reach the shape underneath, or pick it from the **Object** list.
- Give any object a **Name** in the panel; saved files use that name.

## Sizing, moving and turning

Type exact numbers in the panel, or drag handles in the view; both stay in step.

**Exact numbers (panel)**

- **Size:** X (width), Y (depth) and Z (height) in mm. Turn off **Keep proportions** to stretch one direction only. With it on, changing any one size (including the height) scales the other two to match. Tilt: pick an angle in Tilt by, then tap Left side up, Right side up, Front up or Back up. The shape tilts around its own middle; a drawn shape becomes a solid model the first time you tilt it.
- **Position:** the X and Y of the object's center, and **Raised off the plate**, which lifts the object (for tabs or parts that sit on top of others). Flat bottom: set Raised off the plate below 0 (or drag the blue arrow down) and whatever is under the plate is cut off flat.
- **Turn and tilt:** 15° turns, Mirror, Tilt and Tip it over, all in one section.

**Handles in 2D**

- With the **Select** tool, drag an object to move it.
- Drag the **white squares** around a selected object: corners resize both ways, sides resize one way.

**Handles in 3D**

| Handle | What dragging it does |
| --- | --- |
| Red / green arrow | Slides along X / Y |
| Blue arrow | Raises or lowers |
| Pink / green cubes | Stretch width / depth; the opposite side stays put |
| Light-blue cube (top) | Changes the height |
| Yellow corner cube | Scales everything evenly |
| Orange ring | Turns the object, in 5° steps |

The exact value shows at the bottom of the view while you drag. The arrows start just outside the object, and the handles are see-through until you use one; while you drag, only that handle shows. Set **3D handles** to **Normal**, **Small** or **Off** in the panel when nothing is selected. In 3D, **+ Box** and **+ Cylinder** add 20 mm shapes where you're looking.

## Lining up, repeating and measuring

**Snapping.** While you drag an object (in 2D, or with the 3D arrows), it snaps to the edges and centers of other objects and to the plate center. A pink dashed line shows what it lined up with. Turn it off with **Snap to other objects while moving** in the panel when nothing is selected.

**Center on each other.** Select two or more objects (Shift or **Multi**). Under **Center on each other**, **Center them** moves the others to the center of the biggest one, which stays put; **Center on top** also sets them on its top surface (a knob centered on a lid). Groups move as one. Centered parts overlap, and overlapping parts of the same color join, so give them different colors if they should stay separate.

**Line up and spread out.** Select several objects (Shift or **Multi**). Under **Line up**, tap **Left**, **Center**, **Right**, **Top**, **Middle** or **Bottom**. With three or more, **Spread out evenly** makes the gaps between them equal. Groups move as one.

**Repeat** (in any object's panel):

| Pattern | Settings | Good for |
| --- | --- | --- |
| **Row** | **How many in all**, **Spacing** (center to center) | Pegs, slots, a row of holes |
| **Grid** | **Across**, **Up**, and the spacing each way | Vent holes, a tray of cups |
| **Circle** | **How many in all**, **Spread over** (360° = all the way round) | A ring of screw holes around a disk |

For **Circle**, put one copy where you want it first; the copies turn around the center of the part it sits on. Tap **Make copies**. All the copies end up selected, so you can move them together.

**Measure.** Tap **Measure** on the toolbar and drag from one point to another. It snaps to corners and edges, and the distance shows on the line and at the bottom (with the X and Y parts). In 3D, tap a point on any part (or the plate), then tap a second point, or drag between them; corners snap, and the bottom shows the distance with its X, Y and Z parts. Nothing gets selected or moved while Measure is on.

**Redo.** **Redo** under Undo (or Ctrl+Y) puts back what Undo took away.

**Copy and paste.** With a keyboard, **Ctrl+C** copies just what's selected (a whole group if it's one you made with **Group them**, plus its inlays and the connections between the copied pieces; other objects it touches stay behind), **Ctrl+V** pastes a copy beside it (press again for more; it works on another plate too), and **Ctrl+D** duplicates in one step. Copies are placed so they don't touch the original, since touching parts join.

## Holes, boxes and cutting

**Holes**

1. Draw the hole shape over the part, for example a small circle inside a rectangle.
2. Select it and set **This shape is** to **A hole**. It turns red and dashed.
3. Leave **Cut all the way through** on for a hole that goes right through. Turn it off to set **Starts at height** (the floor left under it) and **Hole depth** for a pocket.

Each shape keeps its own height, so a hole never changes the part it cuts into. A hole over an imported model cuts into that model too.

**Make it a box**

1. Select a drawn part and find **Make it a box** in the panel.
2. Set **Wall thickness** and **Floor thickness**, then tap **Hollow it out**. The top is left open.
3. The inside becomes its own hole shape, so you can still select it and change it.
4. For a lid, draw the same outline again with a small height, then use **Connect** to hinge it (see Connecting two parts).

**Make it a box for combined and 3D models.** Combined, imported, spun and other 3D objects have **Make it a box** too: set **Wall thickness** and **Floor thickness** and tap **Hollow it out**. It follows the model's own shape slice by slice, open at the top. Pieces joined into one object get one open space inside; tick **Keep inside walls between the pieces** for separate compartments. It's built into the model (Undo and hollow again to change the walls), and Snug-fit lid is for drawn shapes only. Curved models get fine 0.2 mm steps inside, which print the same but make the file bigger.

**Seam grooves.** To make touching objects look like separate pieces while they print as one solid, select them and open **Seam grooves**. Set **Groove width** and **Groove depth** (1 mm each is a good start) and tap **Add seam grooves**: a groove goes up the front, over the top (untick **Groove over the top too** to skip it) and down the back of every joint, and the bottom stays flat. The grooves and objects become a group so they move together. **Redo seam grooves** applies new sizes; **Remove seam grooves** takes them out. Add seams before **Combine into one object** or **Make it a box**, and the seams carry through.

**Cut (slice)**

1. Select a part (drawn or imported) and tap **Cut this object**. A blue plane shows where the cut goes.
2. Pick a **Direction**: **Flat across**, **Left / right** or **Front / back**.
3. Drag the slider or type the position.
4. Under **Keep**, choose **Both pieces** or just one side, then tap **Cut it**.

With both pieces kept, each becomes its own object, moved apart a little; a flat cut sets the top piece down on the plate. That's the easy way to split a tall model into a body and a lid. Inlays go with the piece they sit on, and inlays on a piece you don't keep are removed.

**Angled cuts.** Under **Angle**, tilt the cut up to 60° either way. For **Flat across** that's **Tilt left / right** and **Tilt front / back**; for the upright directions it's **Turn (seen from above)** (a diagonal cut) and **Lean**. The blue plane follows as you change it. With both pieces kept, the top piece of a tilted flat cut is laid with its cut face down on the plate, ready to print without supports.

**Cutting just part of it.** Tick **Only cut part of it** to take a block out instead of slicing all the way through: set its **Width** and **Depth** (or **Height**), and use the two **Move** settings to place it. The shaded block is what comes off. **Keep** then offers **Both pieces**, **The rest** or **The cut-off part**. It works with an angle too, for example to slice one corner off at a slant. Both pieces always come out closed and ready to print.

## Edges, snug lids, screw holes and jars

**Rounded and beveled edges.** In a drawn part's panel, **Edges** sets the **Top edge** and **Bottom edge** to **Square**, **Round** or **Bevel**, each with a size. A small bottom bevel (0.4–0.8 mm) stops the first layer bulging out ("elephant's foot").

**Snug-fit lid.** After **Hollow it out**, the **Make it a box** section shows **Snug-fit lid**:

1. Set **Lid thickness**, **Lip depth** and **Fit** (0.2 mm is a snug press fit).
2. Turn on **Click-in** if you want a small bump on the lip that clicks into a groove in the box.
3. Tap **Make the lid**. It appears beside the box, upside down and ready to print, as a group named after the box.

**Screw holes.** In a part's panel, **Screw hole**: pick **M2** to **M8**, a **Head** (**Plain**, **Countersunk** or **Counterbore**), and optionally a **Hex nut pocket underneath**. Tap **Add screw hole**; it lands in the middle, then drag it into place. The head is at the top and the nut goes in from the bottom. If you change the part's height, set the hole's **Bottom of the hole** and **Length** to match.

**Screw-top jar.** Tap **+ Jar** in 3D (or **Make a screw-top jar** with nothing selected). Set **Inside diameter**, **Inside height**, **Wall thickness**, **Thread pitch** and **Thread gap**, then **Make the jar**. You get the jar and a ridged cap. The cap prints top-down; flip it over to screw it on. Don't resize the jar or cap afterward, or the threads won't match; make a new one instead.

**Sphere.** Tap **+ Sphere** in 3D (or **Make a sphere** with nothing selected). Set the **Diameter**, turn on **Hollow inside** for a shell and set its **Wall thickness**, and give it a small **Flat spot on the bottom** (about 1 mm) so it sticks to the plate. A solid sphere needs tree supports on the build plate. A hollow one prints best cut in half (**Cut → Flat across** at half its height), each half printed rim-down, then glued; add **Alignment pegs** between the halves to line them up.

## Spinning a drawing into a round part

For vases, knobs, cups and caps:

1. Draw half of the side view, as if the part were cut down the middle. Up the screen is up on the part.
2. Draw the center-line side straight (the **Lines** tool is easiest).
3. In the panel, under **Spin into a round part**, choose which edge is the **Center line** (**Left edge** or **Right edge**) and tap **Spin it**.

The drawing becomes a round 3D part twice as wide as the drawing. Undo brings the drawing back.

## Standing a drawing up, and blending shapes

**Stand it up** (keels, fins, signs, brackets):

1. Draw the side view. Up the screen becomes up on the part.
2. In its panel, under **Stand it up**, set the **Thickness**.
3. Set **Thickness at the bottom edge**: 100% keeps it even; lower it to thin the bottom, like a keel (30% is a good keel taper).
4. Tap **Stand it up**. It stands on its bottom edge. Undo brings the drawing back.

**Blend between shapes** (boat hulls, bottles, vases that aren't round):

1. Draw each cross-section as a separate outline, for example a wide deck outline, a middle outline and a thin keel line.
2. Set each one's height with **Raised off the plate** (for example 0, 10 and 20 mm). Each outline needs its own height.
3. Select them all (Shift or **Multi**). Under **Blend between shapes**, optionally turn on **Hollow, open at the top** and set the wall and floor.
4. Tap **Blend them**. You get one smooth solid passing through every outline. Undo brings the outlines back.

Outlines stacked over each other line up best when their centers are roughly above one another; use **Line up → Center** and **Middle** first.

**Blending side to side.** Set **Direction** to **Left to right** or **Front to back**. Now each outline is an **end view** of the part: across is its width, up the screen is its height. Lay them in a row in that direction; the spaces between them set the length (outlines 60 mm apart make a 120 mm part). **Raised off the plate** still lifts a slice, so for a hull lift the shallow end slices to keep the deck level. Line them up first (**Middle** for left to right, **Center** for front to back). **Hollow, open at the top** is only for **Up (by height)**; hollow a sideways blend afterwards with **Cut** or a hole shape.

**Worked example: a vase from a square base to a round top (80 mm tall)**

Each outline is a cross-section of the finished part, a slice straight across it. Only **Raised off the plate** matters for a blend: it sets how high that slice sits. Each outline's own Z height is ignored, and every outline needs a different height. The lowest outline becomes the bottom and the highest becomes the top.

1. **Draw the slices side by side** (easier to work with before stacking):
   - **Rect:** a square, **40 × 40 mm** under **Size**, **Raised off the plate 0**.
   - **Circle:** **50 mm** wide, raised **40 mm** (the widest middle).
   - **Circle:** **30 mm** wide, raised **80 mm** (the neck).
   - A freehand **Pen** outline works too, for a wavy or odd-shaped slice.
2. **Select them all:** tap **Multi** on the toolbar, tap each outline, then tap **Multi** again (or Shift-click with a keyboard).
3. **Stack them:** under **Line up**, tap **Center**, then **Middle**, so the blend comes out straight instead of leaning.
4. **Hollow (optional):** open **Blend between shapes**, turn on **Hollow, open at the top**, and set **Wall thickness** (2 mm is a good start) and **Floor thickness**.
5. Tap **Blend them**. Check it in 3D. If it's not right, **Undo** brings the outlines back to adjust and blend again.

**Tips**

- **More slices, more control.** Two outlines make a straight taper; add slices between for bulges, a waist or a flared lip.
- **Boat hull:** a wide deck outline on top, a narrower one in the middle and a thin sliver at the bottom for the keel. Then set **Raised off the plate** a little below 0 to give it a flat spot to print on.
- **Leaning on purpose:** shift a slice sideways instead of centering it, and the part bends toward it.
- **Keep the slices:** before blending, tap **Duplicate all** and move the copies aside or save them to **My parts**, so you can tweak and re-blend later.
- **After blending** it's a solid model: resize, color, add surface inlays (including all the way around), tilt or cut it like any other.

**Limits:** parts that are already 3D (spun, stood up, imported or blended) can't be slices; the app says which it left out and why. Pen outlines that cross themselves are cleaned up automatically. Holes inside an outline are ignored (use **Hollow, open at the top**, or a hole shape over the finished part); use closed shapes, not open lines; if a wall is too thick for a narrow slice, that part is left solid and the app says so.

## Importing STL and 3MF files

1. Tap **Import** and pick an `.stl` or `.3mf` file, for example one from MakerWorld or saved from Bambu Studio.
2. The model lands in the middle of the view, sitting on the plate, at its real size. A 3MF made of several parts (like a PrintSketch file with an inlay, or a Bambu Studio model built from parts) comes in as separate parts joined in a group named after the file. Tap it to move the whole thing; pick one part from the **Object** list to recolor, move or delete just that part, or tap **Ungroup** to split them. Each part keeps its filament.
3. Size, move, turn, color, cut, or put hole shapes and inlays on it like anything you drew. **Tip it over** turns it 90° forward or sideways.

**Good to know**

- **Make it a box** isn't offered for imported models. Use a hole shape or **Cut** instead.
- Holes and cuts into imported models are worked out in thin 0.2 mm layers, so curved surfaces come out slightly stepped. That matches what the printer does anyway.
- Very detailed files (over about 300,000 triangles) can be slow on the tablet. The app warns you; simplify them in Bambu Studio first if needed.

**Files from Bambu Studio and MakerWorld**

- **Setting blocks are left out.** Many downloaded projects contain invisible modifier blocks that only change print speed or settings in one area. PrintSketch skips them and says how many it left out.
- **Painted colors come in.** If a model was colored with Bambu Studio's paint tool, those colors show in 3D, your filament slots are set to the file's colors, and the paint is saved again in your file. Change the slots back with **Edit colors** if needed.
- **Spool swaps aren't carried over.** Colors made by pausing to change spools at a set height (like an orange beak) show in the paint color and aren't in PrintSketch's saved file. Add the pause again in Bambu Studio's preview.
- **Cutting a painted model** with **Cut** keeps its paint. A hole shape over it loses the paint on the part that gets rebuilt. Inlays keep it.

## Colors and filaments

Colors in PrintSketch are filament slots, numbered the same way as in Bambu Studio, so the AMS knows which spool goes where.

1. Select an object and tap a numbered swatch under **Color (filament slot)**.
2. Tap **Edit colors** to match each slot to the spool loaded in your AMS. **Add a slot** goes up to 8; **Remove last slot** takes one away.
3. Inlays pick their own slot, so an inlay can be a different color from the surface it sits in.

When you open the saved file in Bambu Studio, each part is already on its slot. Bambu Studio says the file is "not from Bambu Lab" and loads geometry and color data only; that's expected, because PrintSketch saves each part's color as paint, which Bambu keeps. Make sure Bambu has as many filaments in its list (left side) as you used, in the same order as your PrintSketch slots, and set their colors to your spools: the slot colors themselves don't carry over.

## Inlays

There are two ways to add an inlay. Use **Surface inlay** for most things; use the **Inlay** tab for a quick flat sign or tag.

**Surface inlay (any face of any object)**

1. Select the object, then tap **Add inlay to a surface**. The view switches to 3D.
2. Tap the spot on the object where the inlay goes. Any face works: top, side, or a face of an imported model.
3. In the panel, choose **Text** (type it and pick a font) or **My drawing** (pick a shape or a group from the list). The drawing moves into the inlay; Undo brings it back.
4. Pick a **Finish**: **Flush** (level with the surface), **Raised** or **Sunken**. Pick a **Depth** of 0.4, 0.6 or 1.0 mm.
5. Pick its **Color (filament slot)**.

**Moving and resizing it afterward**

- In 3D, drag the inlay itself to slide it across the face.
- Drag the **yellow cube** to resize it, or type **Inlay width**.
- Drag the **orange ring** to turn it, or use the 15° buttons.
- **Nudge 1 mm** arrows make fine moves. **Tap a new spot** moves it to another face.
- **Center on this face**: **Left–right** centers it across the face and leaves its height alone, **Top–bottom** centers it up and down and leaves its side-to-side spot alone, and **Both** puts it dead center. The directions follow the face, not the text's own turn (on a top face, top–bottom means front to back). On a round part it uses the middle as seen from that side. For a pattern that goes all the way around, there's one button, **Center it halfway up**; on a jar it stays below the threads.
- To get back to an inlay later, pick it from the **Object** list.

**Inlay tab (flat sign or tag)**

1. Tap **Inlay** at the top. Choose a **Base part**: a **Plate** with width, height and corner round, or **My drawing**.
2. Choose the **Inlay**: **Text** or **My drawing** (groups are listed too).
3. Drag it on the view to place it, drag a corner to resize, then set **Finish** and **Depth** the same way.

**Tips**

- Keep letter strokes at least 1 mm wide. Thin script fonts need bigger letters.
- On a rounded face (a can, a jar), the inlay wraps around the curve. On odd shapes like domes, check it in 3D.
- To use several drawings as one inlay, group them first (see Selecting several, groups and plates).

**Fonts**

The font list (for 3D text, inlays and the Inlay tab) has three groups:

- **Built in (work everywhere):** 39 fonts that look the same on the tablet and the PC, from plain and bold blocks to slab and fashion serifs, scripts, a typewriter, a stencil, comic and cartoon styles, and **Mountains of Christmas**. They need the internet the first time, then work offline.
- **On this computer:** the common Windows and Mac fonts you have installed (Impact, Comic Sans, Times New Roman, Cooper Black and so on), the same ones Bambu Studio lists. On the tablet this list is short or missing. On the PC, **More → Show all fonts on this computer…** lists every installed font (Chrome asks permission first).
- **My fonts:** **More → ＋ Add a font file (.ttf, .otf)…** loads a font you've downloaded. It stays in the app on that device. **Remove this font from the app** takes it out again.

Fonts from **On this computer** and **My fonts** are only on that device: open the project on another device and that text uses a fallback font. Use a built-in font, or add the same font file there too.

**Curved text and curved surfaces**

- Every text box has a **Curve** setting: **Straight**, **Arc up**, **Half circle**, **Arc down** or **Smile**, plus −/+ to fine-tune in 15° steps. Great for coasters and badges.
- On a rounded face, like a can or a jar, the inlay bends around the curve like a label. Turn off **Wrap around curved surfaces** if you want it to go in straight.

**Surface patterns**

1. Select an object, tap **Add inlay to a surface**, and tap the face.
2. Under **Inlay**, choose **Pattern**, then pick **Criss-cross**, **Squares**, **Waves**, **Stripes**, **Zigzag**, **Dots**, **Honeycomb**, or one of the knitted looks: **Knit**, **Ribbing** or **Cable**.
3. Set the area with **Inlay width** and **Area height**, then **Pattern size** and **Line thickness**.
4. **Sunken** makes a grip texture, **Raised** stands it up, and **Flush** in another color makes a colored design.

Keep lines at least 0.8 mm wide. Patterns wrap around curved faces like text does.

**Knitted looks.** **Knit** makes rows of stockinette "V" stitches, **Ribbing** makes stitch columns with grooves between (like a cuff), and **Cable** makes twisted rope cables with stitches either side. Choosing one sets the finish to **Raised**. **Pattern size** is the width of one stitch (4–7 mm) or, for **Cable**, one cable panel (10–16 mm). A raised depth of 0.6–1.0 mm, matte filament, and a light **Fuzzy skin** in Bambu Studio make it look most like yarn.

**Knit the whole object.** To cover a whole object in stitches, like a knitted toy, select it and open **Knit texture (whole object)**. Pick **Knit** (V stitches) or **Ribbing** (stitch columns), set **Stitch size** (4–6 mm looks most like yarn) and **Depth** (0.6–1.0 mm), and tap **Cover it in stitches**. The stitches wrap over every surface; the bottom stays smooth so it sits flat on the plate. **Redo the texture** starts again from the smooth shape, and **Remove the texture** puts it back. It works on drawn shapes, spheres, jars and imported models (colors are kept), and can take a few seconds on big models. Combined objects can't be textured: undo the combine, texture the pieces, then combine again. Print in matte filament with 0.12–0.16 mm layers.

**All the way around.** On round parts (cylinders, jars, spun vases), turn on **Go all the way around (round parts)**. The pattern circles the whole part at the height where you placed it, and its size is adjusted slightly so the ends meet seamlessly at the back. Text and drawings run around the part too, centered where you placed them.

**Exact top and bottom.** When a pattern runs up a side or all the way around, set **Bottom of the area** and **Top of the area** (heights above the plate) instead of guessing with taps. On a jar, a pattern that goes all the way around stops just below the threads by itself, so the cap still screws on; **Fit it below the threads** puts it back there if you've moved it.

**Drawing lines (for line inlays and grooves)**

1. With nothing selected, turn on **Pen and Lines draw lines, not closed shapes** and set the **Line width**.
2. With **Lines**, tap each point, then **Finish line** (tap the orange dot to close it into a loop). With **Pen**, freehand strokes become lines.
3. Use them as an inlay (**My drawing**), leave them raised, or set them to **A hole** to cut a groove.

## Connecting two parts

1. Make both parts first, for example a box and its lid.
2. Select the first part and tap **Connect to another object**.
3. Pick how they connect, choose the second part from the list, and tap **Connect**.
4. If **Line up** shows in the panel, tap it to move the second part into place. **Swap sides** flips which part is first.

| Type | What it makes | Main settings |
| --- | --- | --- |
| **Hinge** | A lid or folding part that swings | **Print-in-place** or **Pinned**, **Knuckle size**, **Knuckles**, **Hinge length**, **Gap between moving parts** |
| **Dovetail slide** | Pieces that slide together and lock | **How many**, **Slide along the edge**, **Narrow end**, **Wide end**, **Depth**, **Gap** |
| **Alignment pegs** | Pegs on the first part, holes in the second, so they stack lined up | **How many**, **Peg diameter**, **Peg length** |
| **Magnet pockets** | Matching pockets for round magnets | **How many**, **Magnet diameter**, **Magnet thickness** |

**Hinges**

- **Print-in-place** prints already joined. Open it gently a few times after printing to free it.
- **Pinned** leaves a hole through the knuckles. Choose **1.75 filament**, **3 mm rod** or **Custom** for the pin, and push it through after printing.
- Drag the **Try it** slider to swing the lid and check nothing bumps.
- A **Gap between moving parts** of 0.3 mm is a good start on the P2S. Go smaller if it's floppy, bigger if it fuses.

**Printing a pinned lid separately.** With **Pinned** chosen, turn on **Print the lid separately, laid flat**. The lid and its half of the hinge are moved flat onto the plate 6 mm from the box, ready to print without supports. Turn it off to see it hinged again. Don't drag the lid down by hand; this setting keeps the hinge halves matched. After printing, line up the knuckles and push the pin through.

**Pegs on a side.** To fix a flat piece, like a name, onto the side of a box, connect them with **Alignment pegs** and set **Where** to **On a side** (it starts there when the two sit side by side). **Which side** is **Facing it** (the side the piece lies in front of) or **Front**, **Back**, **Left** or **Right**; then **Raise or lower on the side** and **Slide along the side** fine-tune the spot. Lay the piece flat, reading left to right, with its top toward the back. Holes go up into the piece's back and sideways into the side; pins shrink to fit narrow letters, down to 2 mm (use 1.75 mm filament as the pins), and bigger pins print beside the piece. Push the pins in, add glue, and press it on.

**Dovetails** only form where both pieces have material. On a hollow box that means the floor and walls; use **Slide along the edge** to move it over a solid spot.

**Printing connected pieces apart.** Dovetails, alignment pegs and magnet pockets have **Print the pieces apart**. The joint is shaped with the pieces together, then the second piece is shown and saved 6 mm away, ready to print separately (handy for a sign cut in two to fit the plate). Turn it off to see them joined again. Moving the pieces apart by hand instead removes the joint, since it only forms where they meet.

To change or remove a connection later, pick it from the **Object** list. **Remove connection** deletes it.

## Selecting several, groups and plates

**Selecting several objects**

- With a keyboard: hold **Shift** and tap or click each object.
- On the tablet: tap **Multi** on the toolbar, then tap each object. Tap **Multi** again when you're done.
- The panel then works on all of them at once: **Size (all together)**, **Position**, **Turn together**, **Color for all**, **Duplicate all** and **Delete all**. The 3D handles move and resize the whole set.
- **Clear selection** lets go of them all.

**Groups**

1. Select several objects and tap **Group them**.
2. Give it a **Group name**. Tapping any member now picks up the whole group.
3. To change one member alone, pick it from the **Object** list.
4. A group of drawn shapes can be used as an inlay with **Use as inlay →**, or chosen from the list when adding a surface inlay.
5. **Ungroup** splits it back into separate objects.

**Combine into one object.** Connections and the other single-object tools (Cut, Tilt, surface inlays) work on single objects, not groups. Select a group (or several objects) and tap **Combine into one object**: it becomes one object that keeps its colors, holes and inlays. Do this to two groups and you can **Connect** them, for example with a hinge. **Undo the combine** (in the combined object's panel) brings back the original shapes any time, even after closing the app, placed where the object is now. **Split into pieces by color** is different: it only breaks a combined object into one object per color. Once combined, the pieces are solid models, so finish editing outlines and inlay text first.

**Plates**

Extra plates are workspaces for building parts before you need them.

1. Open the **Plate** list in the top bar and choose **＋ Add a plate**.
2. Switch plates with the same list. The number beside each name is how many objects are on it.
3. To bring a part over, select it and use **Move to plate…** in the panel (or **Move all to plate…** for a selection).
4. **Rename or delete this plate…** is at the bottom of the list. Deleting a plate deletes everything on it.

Saving for Bambu Studio saves what's on the current plate only.

## Saving, projects, and getting it to Bambu Studio

There are two kinds of saving. A **project** is your work in progress; a **print file** is what goes to Bambu Studio.

**Projects (to keep working later)**

- Your work saves itself on the device as you go, so closing the app loses nothing.
- Tap **Project** at the top, give it a **Project name** and tap **Save project**. You get a `name.printsketch.json` file with every object, name, hole, color, plate and setting.
- **Open project…** loads one back, on the tablet or the PC. It replaces what's on screen, so save first.
- **New project** clears the screen to start over.

**Print files (for Bambu Studio)**

| What's selected | Button | What gets saved |
| --- | --- | --- |
| Nothing | **Save this plate** | Everything on the current plate |
| One part | **Save this part** | That part, with its holes, inlays and connections |
| Several objects or a group | **Save these** | Just those |
| The Inlay tab | **Save for Bambu Studio** | The base and the inlay as two parts |

- In the installed app, you get a `.3mf` file directly; the small **STL** button beside it saves an `.stl` instead.
- In the claude.ai preview, you get a `.zip` holding both. Unzip it on the PC and use the `.3mf`.
- The file is named after the part's name, so name your objects.

**Naming your file.** Every save asks for a **File name**, already filled in from the part's name, its group, the plate or the project. That name is used for the file and for the object in Bambu Studio.

**Your work is remembered.** PrintSketch keeps your current work on the device, even big imported models, and brings it back when you return to the page. It can be lost if you clear Chrome's browsing data, so still use **Project → Save project** for anything you care about.

**From the tablet to the PC**

1. Save the `.3mf` on the tablet. It lands in **Downloads**.
2. Send it to the PC however is easiest: Quick Share or Phone Link, Google Drive or OneDrive, or a USB cable.
3. On the PC, open Bambu Studio and drag the `.3mf` in, or use **File → Import**.
4. Each part arrives with its name and filament slot already set. Check the filaments match your AMS, slice, and send to the P2S.

Prefer the `.3mf` over `.stl`: the STL loses colors and part names.

**My parts (your own library)**

- Select a part (or a group, or several) and tap **Save to My parts**. Its holes, inlays and connections come along.
- To use it again, tap **My parts** (in the panel when nothing is selected, or under **Project**) and tap **Add**.
- My parts is kept on each device separately. To move parts to another device, put them in a project and save that.

**Check before printing**

Tap **Check before printing** (above the save button). It looks for:

- Anything bigger than the P2S plate (256 × 256 × 256 mm).
- Parts floating above the plate.
- Walls thinner than 0.8 mm.
- Faces that point down more than 45° and will need supports. **Show overhangs in 3D** colors them red.

It's a quick check; Bambu Studio's preview is the final word.

## Printing tips and fixing problems

**Good starting numbers for the P2S**

| Thing | Start with | Why |
| --- | --- | --- |
| Walls (Make it a box) | 2 mm | Four or five passes of a 0.4 mm nozzle; sturdy without wasting filament |
| Hinge gap | 0.3 mm | Moves freely without fusing; try 0.25 if it's loose |
| Dovetail and peg gap | 0.2 mm | Snug slide; go up 0.05 at a time if it's too tight |
| Inlay depth | 0.6 mm (3 layers) | Solid color with no base showing through |
| Text letter strokes | 1 mm or wider | Thinner strokes print broken or get skipped |
| Pinned hinge with filament | 1.75 filament | Leaves a hole that fits a piece of spare filament as the pin |

**Common problems**

| What you see | What to do |
| --- | --- |
| A shape in 3D doesn't look like the drawing | Check for a stray stroke overlapping it; overlapping shapes join. Pick each from the **Object** list to find it. |
| A hole doesn't cut | Make sure it's set to **A hole** and overlaps the part. With **Cut all the way through** off, check **Starts at height**. |
| Two parts are joined that should be separate | They overlap. Move them apart, or raise one with **Raised off the plate**. |
| Can't tap the shape you want | Tap the same spot again to reach the one underneath, or use the **Object** list. |
| Print-in-place hinge is stuck | Work it gently back and forth. Next time, raise the **Gap between moving parts** by 0.05 mm. |
| Inlay is missing or tiny | It may be off the face. Pick it in the **Object** list and tap **Tap a new spot**. |
| Fonts look plain | Fancy fonts need the internet the first time. Open the app online once and they're kept for offline use. |
| The app is slow | Very detailed imported models slow it down. Simplify them in Bambu Studio first. |
| Something went wrong | **Undo** steps back as far as you need. |

If something still isn't right, take a screenshot of the 2D and 3D views and send it to me; that's the fastest way for me to fix it.
