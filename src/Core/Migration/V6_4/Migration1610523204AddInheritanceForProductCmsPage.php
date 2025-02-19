<?php declare(strict_types=1);

namespace Shopware\Core\Migration\V6_4;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\InheritanceUpdaterTrait;
use Shopware\Core\Framework\Migration\MigrationStep;

/**
 * @deprecated tag:v6.5.0 - reason:becomes-internal - Migrations will be internal in v6.5.0
 */
class Migration1610523204AddInheritanceForProductCmsPage extends MigrationStep
{
    use InheritanceUpdaterTrait;

    public function getCreationTimestamp(): int
    {
        return 1610523204;
    }

    public function update(Connection $connection): void
    {
        $this->updateInheritance($connection, 'product', 'cmsPage');
    }

    public function updateDestructive(Connection $connection): void
    {
    }
}
