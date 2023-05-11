<?php
declare(strict_types=1);
// SPDX-FileCopyrightText: René Rettig <rene.rettig@helheim.cloud>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\VSCodeServerIntegration\Tests\Unit\Controller;

use OCA\VSCodeServerIntegration\Controller\NoteApiController;

class NoteApiControllerTest extends NoteControllerTest {
	public function setUp(): void {
		parent::setUp();
		$this->controller = new NoteApiController($this->request, $this->service, $this->userId);
	}
}
